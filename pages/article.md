
import Neuron from 'components/neuron'

import H2 from 'components/h2'

import H3 from 'components/h3'

import Sidebar from 'pages/sidebar'

import PrevNext from 'components/prevNext'

<Sidebar />

<div>

<PrevNext />

This is the second of three articles exploring a family of curve neurons in layer 3b of InceptionV1 in depth. In [Curve Detectors](https://distill.pub/2020/circuits/curve-detectors/) we treated this family like a black box, studying how it activates in response to stimuli like dataset examples and synthetic curve renderings.

In this article we’ll open the black box and analyze the circuit that implements these curve neurons, reverse engineering the model’s learned weights into human-understandable algorithms. 

We’ll start with a high level overview of all four layers of InceptionV1 before 3b, followed by a detailed inspection of the most important weights connecting 3b to the layer immediately before it. After studying this circuit, we’ll use its core ideas to write an “artificial artificial neural network”, tuning a blank neural network by hand to reimplement curve detectors. Finally, we’ll look at the layer after 3b to see how curves are used to implement more sophisticated shapes.

While we exclusively study the curve family in 3b, we believe many of the techniques we introduce are helpful for mechanistically understanding neuron families in general, and we hope this article is a useful template for investigators studying other families.

</div>


## Back to the Input

The curve family in 3b is in the fifth layer of InceptionV1. What do the four layers before them do to construct these curve detectors?

To get a high level view of how these layers connect to 3b curve neurons we can follow the weights backwards through each of these layers and visualize a grid of feature visualizations that causes each spatial position to activate as much as possible<d-footnote>Specifically, we get the gradient from each layer to the 3b curve family using a linear approximation of InceptionV1 where ReLUs are replaced with the identity. Then we use feature visualization with the objective of maximizing  the dot product between each image and each spatial position of the gradient.</d-footnote>. We call this **decomposed feature visualization**. Since curve detectors are [invariant to color](https://distill.pub/2020/circuits/curve-detectors/#synthetic-curves), we’ll optimize in grayscale to increase legibility. Additionally, we’ll make positions with larger magnitude brighter.

In each layer we see a common pattern: the positions with the highest magnitude follow the tangent of the curve that 3b:379 detects. Furthermore, the shape shown in the feature visualization of each grid item (e.g. Gabor Filter, line, curve) is also aligned with the tangent of the curve. This property is actually common to many shapes throughout early vision, and in some sense it’s not surprising, since a simple way to detect curves is to pattern the tangent of the curve with increasingly sophisticated contrast detectors.

import Decomposed from 'pages/decomposed'

<Decomposed data={require('./data/decomposed.json')} />



Each of the cells in grids above represent a vector over neurons in that layer describing how that spatial position causes 3b:379 to fire. Instead of understanding this vector using feature visualization, we can decompose the most important neurons in the highest magnitude spatial position of each of the layers above into their neuron families<d-footnote>When doing this decomposition, it really matters which metric you choose to measure the contribution of a neuron to the vector, since there is a long tail of neurons with low magnitude that collectively make up a large fraction of the total weight. Training models with weight sparsity would reduce this long tail.</d-footnote>. This gives us a sense of how different neuron families in each layer contribute towards 3b:379.

import SemanticDictionary from 'pages/semanticDictionary'

<SemanticDictionary  />



If we were to try implementing our own curve detectors from scratch, the above neuron families are what we’d have to build. Since each family is just a combination of neurons in the previous layer, we can glimpse how each neuron family is built by looking at how they connect. 

Additionally, looking at multi-layer neuron family connection tells us about the multiple pathways of information flow to 3b. For instance, we can see that the lines of conv2d2 connect to 3b curves through 3a lines as well as 3a early curves.

import Paths from 'pages/paths'

<Paths  />



This may seem like an intimidating algorithm, since each neuron family contains up to dozens of neurons with a filter of weights to every neuron in the previous layer. However, the connection between neuron families is often simple to understand because they follow what we call the equivariance motif, meaning the weights connecting each neuron in the families are approximately symmetrical. In particular, they have a rotational symmetry. We’ll discuss the equivariance motif in more depth later in this article, and additionally we’d like to publish a dedicated article about it in the Circuits thread.

We can see this rotational symmetry by looking at the connection between every 3a early curve neuron and 3b:379. It turns out there are curves of curves literally inscribed in the weights of neural networks.

import CurveDiagonal from 'pages/curveDiagonal'

<CurveDiagonal  />



Since rotational symmetry means all weights follow a similar template, we can get a sense of how two families connect by only looking at a few weights, since the other weights will be approximately rotated versions of these.

Another pattern that recurs throughout this circuit is the interplay between line neurons and curve neurons. In all cases, the weights of the upstream neuron are tiled across the tangent of the downstream neuron, with the value of each weight approximately proportional to the similarity in orientation<d-footnote>An important exception to this pattern is the [Combing Phenomenon](https://distill.pub/2020/circuits/curve-detectors/#the-combing-phenomenon), where perpendicular lines activate curves. For this reason, the lines that most inhibit curves are off-orientation, but not quite perpendicular.</d-footnote>.

import CircuitWeights from 'pages/circuitWeights'

<CircuitWeights  />



While looking at a couple weights connecting each layer can give us a sense of how a family works, there’s no substitute for looking at all the weights connecting neuron families. In the next few sections we’ll look in depth at the connections between families in 3a and the curve family in 3b. 


## 3a Early Curve Family

The neurons in 3a with the strongest weights to 3b curve detectors are early curves. 

The strongest connections between early curves and curves are where their orientations align. In each of these cases, we see strong positive weights along the curve’s tangent, surrounded by weak negative weights.

import CurvesWeightsIntro from 'pages/curves3a/weightsIntro'

<CurvesWeightsIntro  />



At every position curve neurons are excited by early curves in a similar orientation and inhibited by ones in the opposing orientation.

There are a couple other subtle things you can find if you look closely. For example, you can see that the weights shift slightly over the course of the curve, to track the change in local curvature.

import SimilarOpposing from 'pages/curves3a/weightsSimilarOpposing'

<SimilarOpposing  />



An interesting phenomenon is that curve detectors in the same orientation are slightly inhibitory when they’re located off the curve. This makes sense, as seeing an early curve located anywhere but the tangent indicates a different shape than a pure curve.

import AnnotateSelectivity from 'pages/curves3a/annotateSelectivity'

<AnnotateSelectivity  />



Instead of looking at individual neuron connections, we can zoom out and look at the whole weight matrix connecting early curves and curves.

We see a striking set of positive weights lining the diagonal where the early curves and curves have similar orientations. This band of positive weights is surrounded by negative weights where the early curve and curve orientations differ. The transition between these two regimes is smooth — if a curve strongly wants to see an early curve it wants to see its neighbor too, but less strongly.

import WeightMatrix from 'pages/curves3a/weightMatrix'

<WeightMatrix  />



Why do we see that curve detectors which are rotated 180 degrees from each other are inhibitory, but not ones rotated 90 degrees? Recall from our previous article that early curve detectors respond slightly to curves that are 180 degrees rotated from their prefered orientation, which we called an echo. This makes sense: a curve in the opposite orientation runs tangent to the curve we’re trying to detect in the middle of the receptive field, causing similar edge detectors to fire.

Curve detectors at 3b have no echoes as a result of these negative weights. We can show this by editing the weight matrix to remove these negative weights and visualizing their behavior against synthetic images of curves using radial tuning curves, which we introduced in [Curve Detectors](https://distill.pub/2020/circuits/curve-detectors).

import NoNegativeWeights from 'pages/curves3a/noNegativeWeights'

<NoNegativeWeights  />



Using negative weights in this way follows a more general trend: our experience is that negative weights are used for things that are in some way similar enough that they could be mistaken. This seems potentially analogous to [lateral inhibition](https://en.wikipedia.org/wiki/Lateral_inhibition) in biological neural networks.


## Aside: Equivariance

As we discussed briefly in Back to the Input, the connection between early curves and curves implement the equivariance motif.<d-footnote>[Equivariance](https://en.wikipedia.org/wiki/Equivariant_map) is when a type of transformation to the input causes features to transform in a parallel way. For example, convolutional neural networks are equivariant to translation: if you translate the input, a translated version of the same features fire.<d-footnote>Modulo concerns about pooling, strided convolutions, etc.</d-footnote> Creating neural networks which are equivariant to additional symmetries by design is an active -- and  our view, exciting -- area of research <d-cite></d-cite> [taco, tess, one gabor to rule them all].</d-footnote>.

As we’ve dug into InceptionV1, we’ve discovered many naturally occurring equivariant neuron families. Curve detectors are one example of a feature family that is equivariant to rotation (different units detect the same curve feature rotated) but we’ve also observed many others. <d-footnote>Other feature families that are equivariant to rotation: gabors, edge detectors, high-low frequency detectors, brightness gradient detectors, color contrast detectors, boundary detectors, oriented fur detectors. Features that are equivariant to horizontal flips: oriented dog head detectors, spirals. Features that are equivariant to color: color center-surround units, color contrast units.</d-footnote> The fact that equivariant families naturally occur seems to support equivariant neural networks as an important research direction, and suggest that the study of what features are naturally learned might be helpful in informing their design.

But what we see with curves isn’t just an equivariant feature family. We see two equivariant curve detector families connected by weights that reflect the equivariant structure. In particular, there’s a special generalization of a convolution, called a group convolution, which can be used to encode symmetries like rotation. What we see in the weights between the two families appears to be approximately a group convolution. For example, if you look at the weights between curves in the same orientation, they are approximately rotated versions of the same weight template:

<CurveDiagonal  />

We’ll discuss equivariance in more detail in a later essay.


## 3a Line Families

The taxonomy [Overview of Early Vision](https://distill.pub/2020/circuits/early-vision/) groups the line-like shapes in 3a into several families: [lines](https://distill.pub/2020/circuits/early-vision/#group_mixed3a_lines), [line misc](https://distill.pub/2020/circuits/early-vision/#group_mixed3a_line_misc.), [angles](https://distill.pub/2020/circuits/early-vision/#group_mixed3a_angles), [thick lines](https://distill.pub/2020/circuits/early-vision/#group_mixed3a_thick_lines), and [line ends](https://distill.pub/2020/circuits/early-vision/#group_mixed3a_line_ends). While these families have subtle differences, they have similar roles in the curve circuit, so we’ll discuss them together.

The 3b curve family uses 3a lines similarly to how it uses 3a early curves. Each neuron lines its tangent with neurons that activate to shapes with orientation that align with the tangent. One big difference between 3a lines and 3a early curves is that 3a lines often have complicated and even discontinuous tuning with respect to orientation. For example, some line detectors will have sharp cutoffs, being excited by lines tilted in one direction from their orientation, but suddenly not excited by lines tilted in the other direction. This is in contrast to curve detectors, which tend to have quite smooth, almost gaussian responses to changes in orientation. 

This discontinuity means we cannot simply look at the weight matrix to see a general pattern. Instead, we can understand how 3a line families connect to 3b curves using synthetic stimuli.

First we can look at how curve neurons respond to synthetic lines using a similar approach to decomposed feature visualization. Instead of filling each grid cell with feature visualizations that maximize each spatial position, each cell contains the line stimuli that causes each curve neuron to fire. This shows us that each 3b curve neuron is excited by edges along its tangent line with a tolerance of between about 10° to 45°.

import LineComparison from 'pages/lines/lineComparison'

<LineComparison data={require('./data/synthetic-lines.json')}  /> \


This tolerance isn’t always symmetric. For instance, 3b:406 is excited by a slightly upward oriented line on its left side. It is less excited by lines that are more upward than its ideal orientation, but it is actually inhibited by lines that are more downward. 

import LineWeights from 'pages/lines/lineWeights'

<LineWeights data={require('./data/synthetic-lines.json')}  />



Now that we understand how 3b curves use lines, we can look at the different types of lines that are found within 3a. To contrast their behavior, we’ll use a [radial tuning curve](https://distill.pub/2020/circuits/curve-detectors/#radial-tuning-curve), just as we did to contrast the difference curve families in InceptionV1.

import LinesRadial from 'pages/lines/radial'


### Lines

There are 11 line neurons in 3a that respond primarily to one angle, some with a small echo 90 degrees from the orientation that causes maximum activations.

<LinesRadial name="Lines" size={140} data={require('./data/radialLines.json')}  />




### Texture Lines

Several neurons in 3a respond to lines that are perpendicular to the orientation where they are longest. These neurons mostly detect fur, but they also contribute to 3b curves. 

<LinesRadial name="Texture Lines" size={160} data={require('./data/radialLines.json')}  />




### Cliffs

Finally, we have a set of neurons with sharp transitions at a particular orientation. Many curves would like to be robust to a range of tilted lines going in one direction, so it can activate to curves with imperfections (e.g. bumps) or curves of different radiuses, but they strongly don't want to see an edge facing the other direction, even if it's only slightly leaning that way. These line-like neurons are how they accomplish this. 

<LinesRadial name="Cliffs" size={160} data={require('./data/radialLines.json')}  />



We find neurons with a cliff behavior are an interesting example of non-linear behavior. We usually think of neurons as measuring distance from some ideal stimuli using task-relevant metrics. For instance, we may expect car neurons to prefer <d-footnote>Or we could imagine a more sophisticated metric, such as style. Since ImageNet contains classes for sports cars and non-sports cars, there may be neurons that measure the “sportiness” of different cars. We think that studying neurons that correspond to cars is an interesting research direction, since it’s easy to accumulate datasets of cars with labelled properties such as year, country of origin, and price.</d-footnote> cars of a certain size, and has weaker activations to cars that are bigger or smaller than its ideal. But this line family provides a counter-example, with a cliff in one direction of orientation where behavior sharply changes.


### Lines in conv2d2

Above we saw that there are several types of line detectors in 3a, and their nuanced and discontinuous behavior make the weight matrix connecting 3a lines and 3b curves chaotic. Interestingly, if we look at the gradients from the lines in conv2d2 (the layer before 3a) and 3b lines, we see a clean matrix that resembles the weight matrix connecting early curves and curves.

import Conv2d2Weights from 'pages/lines/conv2d2Weights'

<Conv2d2Weights  />



In some sense, the connection between conv2d2 lines and 3a lines has some similarity to 3b curves and 4a curves. While curves in 3b follow have [nearly uniform behavior](https://distill.pub/2020/circuits/curve-detectors/#synthetic-curves), the [4a curve family](https://distill.pub/2020/circuits/curve-detectors/#4a) has nuanced behavior helpful for detecting worldly objects like the top of pans. Similarly, line conv2d2 lines seem to represent a family of abstract uniform lines, while 3a lines build nuanced line detectors that are helpful in constructing more sophisticated shapes like 3b curves.

Overall, 3b curves use the line families of 3a in a similar way to how it uses 3a early curves. However, these line neurons are more nuanced, with non-linear behavior that allows 3b curves to be stricter about which orientations excite them and which inhibit them.


## Cosmetic Invariance

In Curve Detectors we saw that curve neurons are robust to cosmetic properties, with similar behavior across textures like metal and wood in a wide variety of lighting. How do curve detectors do it?

<img width={704} style={{marginBottom: 20}} src={require('./datasetExamples.png')} />



We believe this reflects a more widespread phenomenon that recurs throughout early vision. As  progressively sophisticated shapes are built throughout each layer of early vision, such proto-lines, lines, and early curves, they compose the shapes before them with a variety of cosmetic families like colors and textures, tuned precisely to allow them to behave reliably across many textures and lightings. 

The 3b curve family follows this pattern as well. Since it builds off other shapes such as lines and early curves, it inherits their cosmetic robustness. Additionally, they build off a vast family of 65 texture neurons. While the weights to each of these neurons is relatively weak, we can see the wide variety of textures they detect by using dimensionality reduction<d-footnote>We use non-negative matrix factorization (NMF) on texture family activations to find important combinations of texture neurons</d-footnote> to collapse the family into fewer combinations of textures and visualize their attribution to 3b:379. This gives us a sense for the wide range of visual environments, from low frequency blurs to metallic surfaces and hatched textures, that the texture family helps 3b curves detect.

import TextureList from 'pages/texture/list'

<TextureList data={require('./data/textureFactors.json')}  />



We think detailed weight-level analysis of how cosmetic robustness is constructed among the shapes in early layers is an exciting research project. However, since it is more a general phenomenon of early vision rather than specific to curves, it is outside the scope of this article.


## Artificial Artificial Neural Network

So far we’ve looked at a high level overview of how the first three layers of InceptionV1 contribute towards the construction of curve detectors, as well as a deeper look into the mechanics of how 3a directly constructs curve detectors. Perhaps the best test of whether this story accurately reflects the construction of curve detectors is whether it can be used as a template for reimplementing curve detectors from scratch.

In the following experiment, we start with an InceptionV1 architecture with every weight set to zero and adjust the weights using python scripts -- without looking at the real weights -- to reimplement the shape subcircuit above. We can test our model against synthetic curves to see that they do respond to specific orientations of curve stimuli.

import AANNSynthetic from 'pages/aann/syntheticCurves'

<AANNSynthetic />



While our proof-of-concept synthetic neurons are not robust to cosmetic changes in curve stimuli, the color and texture subcircuit gives us a guide for how we could make our neurons more robust. Each time we define a shape detector, such as Gabor filters, complex Gabor filters, or lines, make sure it connects to neurons that can detect all the kinds of contrast we care about. If we do this correctly, our curve neurons several layers later should automatically become robust to a wider set of curve stimuli.


## Downstream

The curve neurons in 3b are used to build more complex and specific shape detectors such as [sophisticated curves](https://distill.pub/2020/circuits/early-vision/), [circles](https://distill.pub/2020/circuits/early-vision/#group_mixed3b_circles_loops), [S-shapes](https://distill.pub/2020/circuits/early-vision/#group_mixed3b_curve_shapes), [spirals](https://distill.pub/2020/circuits/early-vision/#group_mixed3b_curve_shapes), [divots](https://distill.pub/2020/circuits/early-vision/#group_mixed3b_divots), and [“evolutes”](https://distill.pub/2020/circuits/early-vision/#group_mixed3b_evolute) (a term we’ve repurposed to describe units detecting curves facing away from the middle). 

Many of these shapes look for individual curves at different spatial positions, such as circles and evolutes. These shapes often reappear across different branches of 4a, such as the 3x3 and 5x5 branch. 

import Downstream from 'pages/downstream'

<Downstream />



Layer 4a also constructs a series of curve detectors. However, we believe they are better thought of as corresponding to specific wordly objects rather than simply abstract shapes. Many are found in the 5x5 branch of 4a, which specializes in 3d geometry.

For instance, 4a:406 is an upwards facing curve detector that often detects the top of cups and pans. It is primarily built using curves in 3b, just as curves in 3b are partially built out of curves in 3a. However, it responds weakly to a variety of orientations, since it is robust to a variety of 3d perspectives. Other curve neurons in 4a follow a similar story: they are built out of 3b neurons, but in a way that is more related to real world object recognition than to easily human-recognizable abstract shapes.


## Conclusion

In this article we looked at the weights of a neural network and read off an interpretable algorithm: how are the families in 3a used to build the curve neurons in 3b. We saw how the curves in 3a mimic group convolution and how simple lines are supplemented by more specific line-like neurons with sharp peaks at various orientations. We looked at each family in depth, understanding quantitatively with circuit activation reconstruction how it impacts the activations of curves, as well as qualitatively understanding the core ideas of each family.

Then we went upstream and looked at how the network transforms pixels into progressively more sophisticated contrast detectors until eventually building the families in 3a that compose into curves.

We hope that curve circuits provide an example of what we believe it looks like to study the connections between neurons. We believe that hiding in the weights are sophisticated and creative algorithms that the uses to manipulate its learned abstractions. We believe that these algorithms can be distilled into simple stories, and that these stories reappear across neural network topologies. If true, we believe these learned algorithms may be telling us something rich about the nature of vision that might transcend just the study of neural networks.

<PrevNext />
