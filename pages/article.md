
import Neuron from 'components/neuron'

import H2 from 'components/h2'

import H3 from 'components/h3'

import Sidebar from 'pages/sidebar'

import Todo from 'components/todo'

import Todos from 'components/todos'

import PrevNext from 'components/prevNext'

<Sidebar />

<div>

<PrevNext />

<Todo to="Nick" value={7}>Make sure table of contents works</Todo>

<Todo to="Nick" value={7}>Ask Chris what we should put for Ludwig’s affiliation</Todo>

<Todo to="Nick" value={6}>Author contribution statement & Acknowledgements</Todo>

The core hypothesis of circuits is that neural networks have human understandable algorithms written into their weights. In [Zoom In](https://distill.pub/2020/circuits/zoom-in/) we read simple algorithms directly off the weight matrix of InceptionV1, showing how a <a href="https://microscope.openai.com/models/inceptionv1/mixed4c_0/447">car neuron</a> is built from tire, car body, and windshield neurons. So far it's an open question whether studying weights directly is scalable, letting us reverse-engineer more complex algorithms.

One such algorithm in [curve detection](https://distill.pub/2020/circuits/curve-detectors/), which in InceptionV1 utilizes tens of thousands of weights across the first five layers. While it may seem intractable to reverse-engineer this algorithm by reading weights, the problem is simpler than it appears because they have a great deal of structure and patterns.

Two such patterns are [neuron families](https://distill.pub/2020/circuits/early-vision/) and [circuit motifs](https://distill.pub/2020/circuits/zoom-in/#claim-2-motifs). Neuron families are neurons that do similar things, like the ten curve detectors in [layer 3b](https://microscope.openai.com/models/inceptionv1/mixed3b_0). Circuit motifs are weights that do similar things, like those connecting 3a early curve neurons and 3b curve neurons. Each of these weights is approximately predictable given the orientation of the curve each neuron responds to, so we consider these weights to implement the rotational equivariance motif. Thinking in patterns gives us scalability without losing precision, similar to how programmers benefit by thinking in functions as well as lines of code<d-footnote>We pay a small price in precision when we think about the patterns themselves, because the weights don't follow the neuron families and circuit motifs perfectly. However, just as a programmer can always open up a function to understand or change its mechanics, we can look at the weights behind a pattern and understand them close to the metal, which we'll do several times throughout this article. Conversely, if we were to take another approach like model distillation to try simplifying the curve detection algorithm, we would lose access to the original weights, paying a higher price of precision even if we were able to achieve scalability.</d-footnote>.

Ultimately, our mapping of these patterns is only valuable if it does a good job of representing the underlying mechanics. To test this we hand-craft an _artificial artificial neural network_ to implement them and see that its curve detectors approximate those in InceptionV1.

</div>

<h3>Overview of the Curve Detector Algorithm</h3>


In this article we'll reverse-engineer the 10 curve neurons we studied in Curve Detectors <d-cite bibtex-key="cammarata2020curve" />, which reside in the fifth convolutional layer of InceptionV1. We’ll focus on one curve neuron, <a href="https://microscope.openai.com/models/inceptionv1/mixed3b_0/379">3b:379</a>, then show how they all follow a similar pattern.

To understand what the first four layers do in the context of curve detectors, we'll introduce **decomposed feature visualization**. Decomposed feature visualization renders a grid of feature visualization that shows the expanded weights of an upstream layer to a downstream neuron, in this case 3b:379.<d-footnote>Specifically, we calculate the gradient from each layer to the 3b curve family using a linear approximation of InceptionV1 where ReLUs are replaced with the identity. Then we use feature visualization with the objective of maximizing  the dot product between each image and each spatial position of the gradient.</d-footnote>. Intuitively, this is like decomposing the curve into simpler shapes, with simpler shapes the further back we go, from early curves, to lines, and eventually Gabor Filters. Each shape is oriented along the tangent of the curve in 3b:379.

import Decomposed from 'pages/decomposed'

<Decomposed data={require('./data/decomposed.json')} />



We can take the highest magnitude position from each layer above and see which neuron families contribute to it to get a sense for how each shape is built.<d-footnote>Specifically, we take the highest magnitude spatial position from each layer and look at which neuron families according from <a href="https://distill.pub/2020/circuits/early-vision/">Overview of Early Vision</a> contribute most to it.</d-footnote><d-footnote>When doing this decomposition, it really matters which metric you choose to measure how neurons contribute to the vector, such as average or total weight, since there is a long tail of neurons with low magnitude that collectively make up a large fraction of the total weight. Training models with weight sparsity would reduce this long tail.</d-footnote>.

import SemanticDictionary from 'pages/semanticDictionary'

<SemanticDictionary  />



For each family we can also visualize how they connect to each other, showing us a birds-eye view of the curve detection algorithm. Again, we see the layers progressively building more complex shapes, with shapes that closely resemble curve detectors like early curves and well-defined lines being built in 3a, only one layer before curve detectors.

import Paths from 'pages/paths'

<Paths  />



With the important neuron families in mind we can look at the weights connecting them. Many of the weights connecting families in the above figure implement the equivariance motif, meaning they are approximately symmetrical. Since in this case it is a rotational symmetry, we say they implement rotational equivariance. We can see this by looking at the weights connecting 3a early curves and 3b:379.

import CurveDiagonal from 'pages/curveDiagonal'

<CurveDiagonal  />



When neuron families implement rotational equivariance we learn a lot looking at the strongest positive and negative neuron connections, because the others are just rotated versions of them. In the weights we see a general pattern, as each layer builds a contrast detector by tiling a simpler contrast detector along its tangent. When the two shapes are aligned the weight is most positive, and most negative when they are perpendicular.

import CircuitWeights from 'pages/circuitWeights'

<CircuitWeights  />



This schematic gives us a high-level view of curve detection, but it lacks the precision of directly analyzing weights. In the next few sections we'll dive into the most important connections between families in 3a and 3b curve detectors, grounding us from thinking in abstract patterns to thinking in individual weights<d-footnote>To read more about the idea and benefits of fluidly navigating different levels of abstraction, we recommend the interactive essay <a href="http://worrydream.com/LadderOfAbstraction/">Up and Down the Ladder of Abstraction</a> by Bret Victory.</d-footnote>.

<h3>3a Early Curve Family</h3>


Early curves in 3a contribute more to the construction of curve detectors than any other neuron family. At every position curve neurons are excited by early curves in a similar orientation and inhibited by ones in the opposing orientation, closely following the general pattern we saw earlier.

import CurvesWeightsIntro from 'pages/curves3a/weightsIntro'

<CurvesWeightsIntro  />



At every position curve neurons are excited by early curves in a similar orientation and inhibited by ones in the opposing orientation. If you look closely you can see the weights shift slightly over the course of the curve to track the change in local curvature.

import SimilarOpposing from 'pages/curves3a/weightsSimilarOpposing'

<SimilarOpposing  />



An interesting phenomenon is that curve detectors in the same orientation are slightly inhibitory when they’re located off the curve. This makes sense, as seeing an early curve located anywhere but the tangent indicates a different shape than a pure curve.

import AnnotateSelectivity from 'pages/curves3a/annotateSelectivity'

<AnnotateSelectivity  />



The weight matrix connecting early curves and curves shows a striking set of positive weights lining the diagonal where the two shapes have similar orientations. This band of positive weights is surrounded by negative weights where the early curve and curve orientations differ. The transition is smooth — if a curve strongly wants to see an early curve it wants to see its neighbor a bit too.

import WeightMatrix from 'pages/curves3a/weightMatrix'

<WeightMatrix  />



Why do we see that curve detectors which are rotated 180 degrees from each other are inhibitory, but not ones rotated 90 degrees? Recall from our previous article that early curve detectors respond slightly to curves that are 180 degrees rotated from their prefered orientation, which we called an echo. This makes sense: a curve in the opposite orientation runs tangent to the curve we’re trying to detect in the middle of the receptive field, causing similar edge detectors to fire.

These negative weights are the reason curve neurons in 3b have no echoes, which we can validate by using circuit editing to remove them and confirming that echoes appear.

import NoNegativeWeights from 'pages/curves3a/noNegativeWeights'

<NoNegativeWeights  />



Using negative weights in this way follows a more general trend: our experience is that negative weights are used for things that are in some way similar enough that they could be mistaken. This seems potentially analogous to [lateral inhibition](https://en.wikipedia.org/wiki/Lateral_inhibition) in biological neural networks.

<h3>Aside: Equivariance</h3>


As we’ve seen, the connection between early curves and curves implement the equivariance motif.<d-footnote>[Equivariance](https://en.wikipedia.org/wiki/Equivariant_map) is when a type of transformation to the input causes features to transform in a parallel way. For example, convolutional neural networks are equivariant to translation: if you translate the input, a translated version of the same features fire.<d-footnote>Modulo concerns about pooling, strided convolutions, etc.</d-footnote>Creating neural networks which are equivariant to additional symmetries by design is an active -- and our view, exciting -- area of research <d-cite bibtex-key="bergstra2011statistical" />.</d-footnote>. As we’ve dug into InceptionV1, we’ve discovered many naturally occurring equivariant neuron families.<d-footnote>Other feature families that are equivariant to rotation: gabors, edge detectors, high-low frequency detectors, brightness gradient detectors, color contrast detectors, boundary detectors, oriented fur detectors. Features that are equivariant to horizontal flips: oriented dog head detectors, spirals. Features that are equivariant to color: color center-surround units, color contrast units.</d-footnote> The fact that equivariant families naturally occur seems to support equivariant neural networks as an important research direction, and suggest that the study of what features are naturally learned might be helpful in informing their design. In particular, there’s a special generalization of a convolution, called a group convolution, which can be used to encode symmetries like rotation, which the weights between early curves and curves seem to approximate. We’ll discuss equivariance in more detail in a later essay.

<h3>3a Line Families</h3>


[Overview of Early Vision](https://distill.pub/2020/circuits/early-vision/) separates line-like shapes in 3a into several families: [lines](https://distill.pub/2020/circuits/early-vision/#group_mixed3a_lines), [line misc](https://distill.pub/2020/circuits/early-vision/#group_mixed3a_line_misc.), [angles](https://distill.pub/2020/circuits/early-vision/#group_mixed3a_angles), [thick lines](https://distill.pub/2020/circuits/early-vision/#group_mixed3a_thick_lines), and [line ends](https://distill.pub/2020/circuits/early-vision/#group_mixed3a_line_ends). Since they have similar roles in the context of curve detectors we’ll discuss them together, while pointing out their subtle differences.

Like early curves, lines align to the tangent of curve detectors, with more positive weights when the neurons have the same orientation. However, this pattern is more nuanced and discontinuous with lines than early curves. A line with a similar orientation to a curve will excite it, but a line that's rotated a little may inhibit it. This makes it hard to see a general pattern by looking directly at the weight matrix.

Instead, we can study which line orientations excite curve detectors using synthetic stimuli. We can take a similar approach to decomposed feature visualization to see which lines different spatial positions respond to. This shows us that each 3b curve neuron is excited by edges along its tangent line with a tolerance of between about 10° to 45°.

import LineComparison from 'pages/lines/lineComparison'

<LineComparison data={require('./data/synthetic-lines.json')}  /> \


This tolerance isn’t always symmetric, which we can see in 3b:406 below. On its left side it is most excited by lines about 10° upwards. If the line is oriented above 10° it is still excited, but if it is less than 10° it switches to being inhibited.

import LineWeights from 'pages/lines/lineWeights'

<LineWeights data={require('./data/synthetic-lines.json')}  />



This view tells us how each curve detector responds to different orientations of lines in general. We can connect this back to individual line neurons by studying which orientations those line neurons respond to using a [radial tuning curve](https://distill.pub/2020/circuits/curve-detectors/#radial-tuning-curve).

import LinesRadial from 'pages/lines/radial'

<h4>Lines</h4>


There are 11 simple line neurons in 3a that mostly fire to one orientation, although some activate more weakly to an "echo" 90 degrees away.

<LinesRadial name="Lines" size={140} data={require('./data/radialLines.json')}  />



<h4>Texture Lines</h4>


Five neurons in 3a respond to lines that are perpendicular to the orientation where they are longest. These neurons mostly detect fur, but they also contribute to 3b curves. 

<LinesRadial name="Texture Lines" size={160} data={require('./data/radialLines.json')}  />



<h4>Cliffs</h4>


Finally, there are five line neurons with curiously sharp transitions. These lines want an orientation facing a particular direction, and tolerate error in that direction, but definitely don't want it going the other way, even if slightly. In curve detection, this is useful for handling imperfections, like bumps.

<LinesRadial name="Cliffs" size={160} data={require('./data/radialLines.json')}  />



We find cliff-like line neurons an interesting example of non-linear behavior. We usually think of neurons as measuring distance from some ideal. For instance, we may expect car neurons to prefer <d-footnote>Or we could imagine a more sophisticated metric, such as style. Since ImageNet contains classes for sports cars and non-sports cars, there may be neurons that measure the “sportiness" of different cars. We think that studying neurons that correspond to cars is an interesting research direction, since it’s easy to accumulate datasets of cars with labelled properties such as year, country of origin, and price.</d-footnote> cars of a certain size, and has weaker activations to cars that are bigger or smaller than its ideal. But this line family provides a counter-example, accepting error on one side while not firing at all on the other.

<h4>Lines in conv2d2</h4>


The different types of line neurons we looked at above each have different behaviors, which is part of why the weight matrix between 3a lines and 3b curves is indecipherable. However, if we go back one more layer and look at how conv2d2 lines connect to 3b curves, we see structure.

import Conv2d2Weights from 'pages/lines/conv2d2Weights'

<Conv2d2Weights  />



We think this points to an interesting property of both curves and lines in InceptionV1. The line family in conv2d2 are roughly "pure" line detectors, detecting lines in an elegant pattern. The next layer (3a) builds lines too, but they're more applied and nuanced, with seemingly-awkward behavior like cliff-lines where the network finds them useful. Similarly, the 3b curve detectors are surprisingly elegant detectors of curves behaviorally, and mostly follow clean patterns in their construction. In contrast, the curves in the next layer (4a) are more applied and nuanced, mostly corresponding to [3d geometry](https://distill.pub/2020/circuits/curve-detectors/#4a) and seemingly specialized for detecting real-world objects like the tops of cups and pans. Perhaps this points to a yet unnamed motif of pure shape detectors directly followed by applied ones.

<h3>Cosmetic Invariance</h3>


In Curve Detectors we saw how curve neurons seem to be robust to several cosmetic properties, with similar behavior across textures like metal and wood in a variety of lighting. How do they do it?

<img width={704} style={{marginBottom: 20}} src={require('./datasetExamples.png')} />



We believe this reflects a more widespread phenomenon in early vision. As progressively sophisticated shapes are built in each layer, new shapes incorporate cosmetic neuron families like colors and texture. For instance, 3b curve neurons are built primarily from the line and early curve neuron families, but they also incorporate a family of 65 texture neurons. This means they both inherit the cosmetic robustness of the line and early curve neurons, as well as strengthen it by including more textures.

While we won't do a detailed weight-level analysis of how cosmetic robustness propagates through the shapes of early vision in this article, which is a broader topic than curve detection, we think this is an exciting direction for future research.

<h3>Artificial Artificial Neural Network</h3>


How do we know this story about the mechanics of curve detectors is true? One way is to use it to reimplement curve detectors from scratch. We programmatically tuned the weights of a blank neural network to implement the neuron families and circuit motifs from this article, and made the python code available and runnable in this Colab notebook. We did not look at the original neural network’s weights when constructing this _artificial artificial neural network_, which would go against the spirit of the exercise. 

We can compare the circuits of our artificial artificial neural network with the normally trained InceptionV1 model.

	

import AANNCircuit from 'pages/aann/circuit'

<AANNCircuit data={require('./data/aann-circuit.json')} />



If we look at the full weight matrix connecting 3a families with 3b curves in the artificial artificial neural network we see that they closely resemble the weights in the naturally trained InceptionV1, but cleaner since we set them programmatically.

 

import AANNWeights from 'pages/aann/weights'

<AANNWeights data={require('./data/aann-weights.json')} />



We can apply any technique from [Curve Detectors](https://distill.pub/2020/circuits/curve-detectors/) to compare our artificial curve detectors to the natural ones. One technique we've already shown is feature visualization, which renders grayscale curves because we don't include cosmetic neurons like color-contrast detectors in our curve detectors. Perhaps the most useful comparison is using synthetic curve stimuli, which shows us how curve neurons respond to the curve stimuli across different orientations and radii. We see that they behave similar to the natural curve detectors, but with weak echoes to curve stimuli with a large radius, which we believe could be fixed with careful tuning.

import AANNSynthetic from 'pages/aann/syntheticCurves'

<AANNSynthetic />



<h4>Artificial Neuron Surgery</h4>


Another way to test our artificial curve detectors is to use them in place of InceptionV1's natural ones and see how it affects the model's performance. When we remove InceptionV1’s 3b curve detectors entirely, the model’s top-5 accuracy across 2000 validation set images drops from 88.6% to 86.3%. When we replace 3b curve detectors with our artificial curve detectors more than half of this drop is recovered, with an accuracy of 87.6%. Note that we're likely not mimicking the exact conditions the model was trained under<d-footnote>The InceptionV1 model we’ve been looking at was originally trained at Google using a precursor to the Tensorflow library that no longer exists, and the code used to train it has been lost.</d-footnote>, but our initial experiments suggest that injecting our artificial curve detectors recover more than half the hit in top-5 accuracy across 2000 ImageNet validation images caused by ablating 3b curve neurons altogether. Specifically, the vanilla model archives 88.6% accuracy, 87.6% with substituted artificial curve neurons, and 86.3% with no 3b curves. We suspect that tuning normalization or adding in color contrast detectors to our currently grayscale artificial curve neurons are low hanging fruit for reducing this gap.

We can also get a qualitative sense for the differences by looking at a saliency map of dataset examples that cause curve detectors to fire strongly.

import Surgery from 'pages/aann/surgery'

<Surgery />



Overall, we believe these experiments show that our artificial curve detectors are roughly analogous to the naturally trained ones. Since they are nearly a direct translation from the neuron families and motifs we've described in this article into Python code for setting weights,  we think this is strong evidence these neuron families and motifs accurately reflect the underlying circuits that construct curve detectors.

<h3>Downstream</h3>


Having studied how curve neurons are built, we'll briefly look at how curve neurons are used downstream to construct more sophisticated shapes in the next layer, 4a.

The curve neurons in 3b are used to build more complex and specific shape detectors such as [sophisticated curves](https://distill.pub/2020/circuits/early-vision/), [circles](https://distill.pub/2020/circuits/early-vision/#group_mixed3b_circles_loops), [S-shapes](https://distill.pub/2020/circuits/early-vision/#group_mixed3b_curve_shapes), [spirals](https://distill.pub/2020/circuits/early-vision/#group_mixed3b_curve_shapes), [divots](https://distill.pub/2020/circuits/early-vision/#group_mixed3b_divots), and [“evolutes"](https://distill.pub/2020/circuits/early-vision/#group_mixed3b_evolute) (a term we’ve repurposed to describe units detecting curves facing away from the middle). 

Many of these shapes look for individual curves at different spatial positions, such as circles and evolutes. These shapes often reappear across different branches of 4a, such as the 3x3 and 5x5 branch. 

import Downstream from 'pages/downstream'

<Downstream />



Layer 4a also constructs a series of curve detectors, mostly in the 5x5 branch that specializes in 3d geometry. However, we believe they should be thought of less as pure abstract shapes and more as corresponding to specific worldly objects, like [4a:406](https://microscope.openai.com/models/inceptionv1/mixed4a_0/406) which often detects the top of cups and pans.

<h3>Conclusion</h3>


In this article we reverse-engineered the curve detection algorithm in InceptionV1 into a human understandable circuit schematic and used it to reimplement curve detector neurons from scratch, demonstrating that the schematic accurately reflects what the neural network is doing.

While this article focused on only curve detection, we believe that neural networks learn many sophisticated and creative algorithms that can be reverse-engineered and understood by analyzing the patterns in their weights. Furthermore, we believe these high level algorithms reappear between neural networks, as we will investigate more in the third article of this series, Universal Curves. If learned algorithms are indeed universal, we believe they may be telling us something rich about the nature of vision that might transcend just the study of neural networks.

<PrevNext />

<Todos />
