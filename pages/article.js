import './init'
import Neuron from 'components/neuron'
import H2 from 'components/h2'
import H3 from 'components/h3'
import Sidebar from 'pages/sidebar'
import Todo from 'components/todo'
import Todos from 'components/todos'
import PrevNext from 'components/prevNext'
import Margin379 from 'pages/backToTheInput/margin379'
import Decomposed from 'pages/decomposed'
import SemanticDictionary from 'pages/semanticDictionary'
import Paths from 'pages/paths'
import CurveDiagonal from 'pages/curveDiagonal'
import CircuitWeights from 'pages/circuitWeights'
import CurvesWeightsIntro from 'pages/curves3a/weightsIntro'
import SimilarOpposing from 'pages/curves3a/weightsSimilarOpposing'
import WeightMatrix from 'pages/curves3a/weightMatrix'
import NoNegativeWeights from 'pages/curves3a/noNegativeWeights'
import LineComparison from 'pages/lines/lineComparison'
import LineWeights from 'pages/lines/lineWeights'
import LinesRadial from 'pages/lines/radial'
import Conv2d2Weights from 'pages/lines/conv2d2Weights'
import datasetExamples from './datasetExamples.png'
import AANNSynthetic from 'pages/aann/syntheticCurves'
import Surgery from 'pages/aann/surgery'
import AANNCircuit from 'pages/aann/circuit'
import AANNWeights from 'pages/aann/weights'
import Downstream from 'pages/downstream'

import React from 'react'

const layoutProps = {}
const MDXLayout = React.Fragment
export default function MDXContent({ components, ...props }) {
  return (
    <MDXLayout
      {...layoutProps}
      {...props}
      components={components}
      mdxType="MDXLayout"
    >
      <Sidebar mdxType="Sidebar" />
      <div>
        <PrevNext mdxType="PrevNext" />
        <p>{`Many approaches to interpretability give high level explanations, but it's hard to know if they're true. Circuits takes the opposite approach: building up from individual neurons and individual weights to easily verifiable explanations of tiny slices of neural networks. But it faces a different question: can we ever hope to understand a full neural network this way?`}</p>
        <p>
          {`This paper uses the Circuits approach to reverse-engineer curve detectors, a neuron family we studied in a previous article. We find that although curve detection involves more than 50,000 parameters, they actually implement a simple algorithm that can be read off the weights and described in just a few English sentences. Based on this understanding, we re-implement curve detectors by hand, writing out weights to create an `}
          <em parentName="p">{`artificial`}</em>
          {` artificial neural network that mimics curve detectors.`}
        </p>
        <p>
          {`The reason the curve circuit is relatively simple is because of the `}
          <a
            parentName="p"
            {...{
              href: 'http://v',
            }}
          >{`equivariance motif`}</a>
          {`. Rotational equivariance reduces the complexity by a factor of 10-20x while scale equivariance reduces it by an additional 2-3x, for a total reduction of ~50x`}
          <d-footnote>{`A small portion involving the interactions of color-contrast detectors with line detectors is further reduced by a factor of ~8x due to hue equivariance, but doesn't significantly reduce the complexity of the overall circuit.`}</d-footnote>
          {`. We find this an exciting example of how motifs can dramatically simplify circuits. In this circuit the main motif is equivariance, but in others different motifs may be more important.`}
        </p>
        <p>{`While the curve circuit in InceptionV1 is quaint next to the 175b weights in GPT-3, it's a big step up from the tiny circuits in Zoom In. We think the surprising simplicity of the curve circuit is a glimmer of hope that the Circuits approach may scale to letting us reverse-engineer big neural networks into small verifiable explanations.`}</p>
      </div>
      <hr />
      <h2 id="overview">The Curve Detector Algorithm</h2>
      <p>
        {`In this article we'll reverse-engineer the 10 curve neurons we studied in `}
        <a
          parentName="p"
          {...{
            href: 'https://distill.pub/2020/circuits/curve-detectors/',
          }}
        >{`Curve Detectors`}</a>
        {` `}
        <d-cite bibtex-key="cammarata2020curve" />
        {`, which reside in the fifth convolutional layer of InceptionV1. We’ll focus on one curve neuron, `}
        <a href="https://microscope.openai.com/models/inceptionv1/mixed3b_0/379">{`3b:379`}</a>
        {`, then show how they all follow a similar pattern.`}
      </p>

      <Margin379 mdxType="Margin379" />
      <p>
        {`To get a high level understanding of the first four layers in the context of curve detectors, we use a method we call `}
        <strong parentName="p">{`decomposed feature visualization`}</strong>
        {`. Decomposed feature visualization renders a grid of feature visualization that shows the expanded weights of an upstream layer to a downstream neuron, in this case 3b:379`}
        <d-footnote>{`Specifically, we calculate the gradient from each layer to the 3b curve family using a linear approximation of InceptionV1 where ReLUs are replaced with the identity. Then we use feature visualization with the objective of maximizing  the dot product between each image and each spatial position of the gradient.`}</d-footnote>
        {`. Intuitively, this is like decomposing the curve into simpler shapes, with simpler shapes the further back we go, from early curves, to lines, and eventually Gabor Filters. Each shape is oriented along the tangent of the curve in 3b:379.`}
      </p>

      <Decomposed
        data={require('./data/decomposed.json')}
        mdxType="Decomposed"
      />
      <p>
        {`We can take the highest magnitude position from each layer above and see which neuron families contribute to it to get a sense for how each shape is built`}
        <d-footnote>
          {`Specifically, we take the highest magnitude spatial position from each layer and look at which neuron families according from `}
          <a href="https://distill.pub/2020/circuits/early-vision/">{`Overview of Early Vision`}</a>
          {` contribute most to it.`}
        </d-footnote>
        <d-footnote>{`When doing this decomposition, it really matters which metric you choose to measure how neurons contribute to the vector, such as average or total weight, since there is a long tail of neurons with low magnitude that collectively make up a large fraction of the total weight. Training models with weight sparsity would reduce this long tail.`}</d-footnote>
        {`.`}
      </p>

      <SemanticDictionary mdxType="SemanticDictionary" />
      <p>{`For each family we can also visualize how they connect to each other, showing us a birds-eye view of the curve detection algorithm. Again, we see the layers progressively building more complex shapes, with shapes that closely resemble curve detectors like early curves and well-defined lines being built in 3a, only one layer before curve detectors.`}</p>

      <Paths mdxType="Paths" />
      <p>
        {`Now that we know which neuron families are most important for curve detection, we can invest in understanding the weights connecting them. Luckily this is sometimes easy, since weights connecting families tend to follow patterns that we call `}
        <a
          parentName="p"
          {...{
            href: 'https://distill.pub/2020/circuits/zoom-in/#claim-2-motifs',
          }}
        >{`motifs`}</a>
        {`. Many families in this diagram implement the rotational equivariance motif, meaning that each neuron in a family is approximately a rotated version of another neuron in that family. We can see this in the weights connecting 3a early curves and 3b curves.`}
      </p>

      <CurveDiagonal mdxType="CurveDiagonal" />
      <p>{`When neuron families implement rotational equivariance we learn a lot looking at the strongest positive and negative neuron connections, because the others are just rotated versions of them. In the weights we see a general pattern, as each layer builds a contrast detector by tiling a simpler contrast detector along its tangent. When the two shapes are aligned the weight is most positive, and most negative when they are perpendicular.`}</p>

      <CircuitWeights mdxType="CircuitWeights" />
      <p>{`So far we’ve looked at the neuron families that are most important to curve detection, and also at the circuit motifs connecting them. This high-level “circuit schematic” is useful for seeing a complex algorithm at a glance, and it tells us the main components we'd need to build if we wanted to reimplement the circuit from scratch.`}</p>
      <p>{`The circuit schematic also makes it easy to describe a few sentence English story of how curve detection works. Gabor Filters turn into proto-lines which build lines and early curves. Finally, lines and early curves are composed into curves. In each case, each shape family (eg conv2d2 line) has positive weight across the tangent of the shape family it builds (eg. 3a early curve). Each shape family implements the rotational equivariance motif, containing multiple rotated copies of approximately the same neuron.`}</p>
      <p>
        {`In the next few sections we'll zoom in from this high level description to a weight-level analysis of how each of the 3a families we've looked at so far contribute to curve detectors.`}
        <d-footnote>
          {`To read more about the idea and benefits of fluidly navigating different levels of abstraction, we recommend the interactive essay `}
          <a href="http://worrydream.com/LadderOfAbstraction/">{`Up and Down the Ladder of Abstraction`}</a>
          {` by Bret Victor.`}
        </d-footnote>
        {`.`}
      </p>
      <hr />
      <h2 id="components">The Components of Curve Detectors</h2>
      <h3 id="early-curve-family">3a Early Curve Family</h3>
      <p>{`Early curves in 3a contribute more to the construction of curve detectors than any other neuron family. At every position curve neurons are excited by early curves in a similar orientation and inhibited by ones in the opposing orientation, closely following the general pattern we saw earlier.`}</p>

      <CurvesWeightsIntro mdxType="CurvesWeightsIntro" />
      <p>{`At every position curve neurons are excited by early curves in a similar orientation and inhibited by ones in the opposing orientation. If you look closely you can see the weights shift slightly over the course of the curve to track the change in local curvature.`}</p>

      <SimilarOpposing mdxType="SimilarOpposing" />
      <p>{`The weight matrix connecting early curves and curves shows a striking set of positive weights lining the diagonal where the two shapes have similar orientations. This band of positive weights is surrounded by negative weights where the early curve and curve orientations differ. The transition is smooth — if a curve strongly wants to see an early curve it wants to see its neighbor a bit too.`}</p>

      <WeightMatrix mdxType="WeightMatrix" />
      <p>{`Why do we see that curve detectors which are rotated 180 degrees from each other are inhibitory, but not ones rotated 90 degrees? Recall from our previous article that early curve detectors respond slightly to curves that are 180 degrees rotated from their prefered orientation, which we called an echo. This makes sense: a curve in the opposite orientation runs tangent to the curve we’re trying to detect in the middle of the receptive field, causing similar edge detectors to fire.`}</p>
      <p>{`These negative weights are the reason curve neurons in 3b have no echoes, which we can validate by using circuit editing to remove them and confirming that echoes appear.`}</p>

      <NoNegativeWeights mdxType="NoNegativeWeights" />
      <p>
        {`Using negative weights in this way follows a more general trend: our experience is that negative weights are used for things that are in some way similar enough that they could be mistaken. This seems potentially analogous to `}
        <a
          parentName="p"
          {...{
            href: 'https://en.wikipedia.org/wiki/Lateral_inhibition',
          }}
        >{`lateral inhibition`}</a>
        {` in biological neural networks.`}
      </p>
      <h3 id="line-families">3a Line Families</h3>
      <p>
        <a
          parentName="p"
          {...{
            href: 'https://distill.pub/2020/circuits/early-vision/',
          }}
        >{`Overview of Early Vision`}</a>
        {` separates line-like shapes in 3a into several families: `}
        <a
          parentName="p"
          {...{
            href:
              'https://distill.pub/2020/circuits/early-vision/#group_mixed3a_lines',
          }}
        >{`lines`}</a>
        {`, `}
        <a
          parentName="p"
          {...{
            href:
              'https://distill.pub/2020/circuits/early-vision/#group_mixed3a_line_misc.',
          }}
        >{`line misc`}</a>
        {`, `}
        <a
          parentName="p"
          {...{
            href:
              'https://distill.pub/2020/circuits/early-vision/#group_mixed3a_angles',
          }}
        >{`angles`}</a>
        {`, `}
        <a
          parentName="p"
          {...{
            href:
              'https://distill.pub/2020/circuits/early-vision/#group_mixed3a_thick_lines',
          }}
        >{`thick lines`}</a>
        {`, and `}
        <a
          parentName="p"
          {...{
            href:
              'https://distill.pub/2020/circuits/early-vision/#group_mixed3a_line_ends',
          }}
        >{`line ends`}</a>
        {`. Since they have similar roles in the context of curve detectors we’ll discuss them together, while pointing out their subtle differences.`}
      </p>
      <p>{`Like early curves, lines align to the tangent of curve detectors, with more positive weights when the neurons have the same orientation. However, this pattern is more nuanced and discontinuous with lines than early curves. A line with a similar orientation to a curve will excite it, but a line that's rotated a little may inhibit it. This makes it hard to see a general pattern by looking directly at the weight matrix.`}</p>
      <p>{`Instead, we can study which line orientations excite curve detectors using synthetic stimuli. We can take a similar approach to decomposed feature visualization to see which lines different spatial positions respond to. This shows us that each 3b curve neuron is excited by edges along its tangent line with a tolerance of between about 10° to 45°.`}</p>

      <LineComparison
        data={require('./data/synthetic-lines.json')}
        mdxType="LineComparison"
      />
      <p>{`This tolerance isn’t always symmetric, which we can see in 3b:406 below. On its left side it is most excited by lines about 10° upwards. If the line is oriented above 10° it is still excited, but if it is less than 10° it switches to being inhibited.`}</p>

      <LineWeights
        data={require('./data/synthetic-lines.json')}
        mdxType="LineWeights"
      />
      <p>
        {`This view tells us how each curve detector responds to different orientations of lines in general. We can connect this back to individual line neurons by studying which orientations those line neurons respond to using a `}
        <a
          parentName="p"
          {...{
            href:
              'https://distill.pub/2020/circuits/curve-detectors/#radial-tuning-curve',
          }}
        >{`radial tuning curve`}</a>
        {`.`}
      </p>

      <h4>{`Lines`}</h4>
      <p>{`There are 11 simple line neurons in 3a that mostly fire to one orientation, although some activate more weakly to an "echo" 90 degrees away.`}</p>
      <LinesRadial
        name="Lines"
        size={140}
        data={require('./data/radialLines.json')}
        mdxType="LinesRadial"
      />
      <h4>{`Texture Lines`}</h4>
      <p>{`Five neurons in 3a respond to lines that are perpendicular to the orientation where they are longest. These neurons mostly detect fur, but they also contribute to 3b curves. `}</p>
      <LinesRadial
        name="Texture Lines"
        size={160}
        data={require('./data/radialLines.json')}
        mdxType="LinesRadial"
      />
      <h4>{`Cliffs`}</h4>
      <p>{`Finally, there are five line neurons with curiously sharp transitions. These lines want an orientation facing a particular direction, and tolerate error in that direction, but definitely don't want it going the other way, even if slightly. In curve detection, this is useful for handling imperfections, like bumps.`}</p>
      <LinesRadial
        name="Cliffs"
        size={160}
        data={require('./data/radialLines.json')}
        mdxType="LinesRadial"
      />
      <p>
        {`We find cliff-like line neurons an interesting example of non-linear behavior. We usually think of neurons as measuring distance from some ideal. For instance, we may expect car neurons to prefer `}
        <d-footnote>{`Or we could imagine a more sophisticated metric, such as style. Since ImageNet contains classes for sports cars and non-sports cars, there may be neurons that measure the “sportiness" of different cars. We think that studying neurons that correspond to cars is an interesting research direction, since it’s easy to accumulate datasets of cars with labelled properties such as year, country of origin, and price.`}</d-footnote>
        {` cars of a certain size, and has weaker activations to cars that are bigger or smaller than its ideal. But this line family provides a counter-example, accepting error on one side while not firing at all on the other.`}
      </p>
      <h4>{`Lines in conv2d2`}</h4>
      <p>{`The different types of line neurons we looked at above each have different behaviors, which is part of why the weight matrix between 3a lines and 3b curves is indecipherable. However, if we go back one more layer and look at how conv2d2 lines connect to 3b curves, we see structure.`}</p>

      <Conv2d2Weights mdxType="Conv2d2Weights" />
      <p>
        {`We think this points to an interesting property of both curves and lines in InceptionV1. The line family in conv2d2 are roughly "pure" line detectors, detecting lines in an elegant pattern. The next layer (3a) builds lines too, but they're more applied and nuanced, with seemingly-awkward behavior like cliff-lines where the network finds them useful. Similarly, the 3b curve detectors are surprisingly elegant detectors of curves behaviorally, and mostly follow clean patterns in their construction. In contrast, the curves in the next layer (4a) are more applied and nuanced, mostly corresponding to `}
        <a
          parentName="p"
          {...{
            href: 'https://distill.pub/2020/circuits/curve-detectors/#4a',
          }}
        >{`3d geometry`}</a>
        {` and seemingly specialized for detecting real-world objects like the tops of cups and pans. Perhaps this points to a yet unnamed motif of pure shape detectors directly followed by applied ones.`}
      </p>
      <h3 id="cosmetic-neurons">Cosmetic Neurons</h3>
      <p>{`In Curve Detectors we saw how curve neurons seem to be robust to several cosmetic properties, with similar behavior across textures like metal and wood in a variety of lighting. How do they do it?`}</p>

      <img
        width={704}
        style={{
          marginBottom: 20,
        }}
        src={datasetExamples}
      />
      <p>{`We believe this reflects a more widespread phenomenon in early vision. As progressively sophisticated shapes are built in each layer, new shapes incorporate cosmetic neuron families like colors and texture. For instance, 3b curve neurons are built primarily from the line and early curve neuron families, but they also incorporate a family of 65 texture neurons. This means they both inherit the cosmetic robustness of the line and early curve neurons, as well as strengthen it by including more textures.`}</p>
      <p>{`While we won't do a detailed weight-level analysis of how cosmetic robustness propagates through the shapes of early vision in this article, which is a broader topic than curve detection, we think this is an exciting direction for future research.`}</p>
      <hr />
      <h2 id="artificial-artificial-neural-network">
        An Artificial Artificial Neural Network
      </h2>
      <p>{`How do we know this story about the mechanics of curve detectors is true? One way is to use it to reimplement curve detectors from scratch. We manually set the weights of a blank neural network to implement the neuron families and circuit motifs from this article, crafting an artificial_ _neural network, and made the python code available and runnable in this Colab notebook. We did not look at the original neural network’s weights when constructing it, which would go against the spirit of the exercise.`}</p>
      <p>
        {`To compare our artificial curve detectors against InceptionV1's naturally learned ones we have the full palette of techniques we used in `}
        <a
          parentName="p"
          {...{
            href: 'https://distill.pub/2020/circuits/curve-detectors/',
          }}
        >{`Curve Detectors`}</a>
        {` available to us. We'll choose three: feature visualization, dataset examples, and synthetic stimuli. From there we'll run two additional comparisons by leveraging circuits and model editing.`}
      </p>
      <p>
        {`First we'll look at feature visualization and responses to synthetic curve stimuli together. We see the feature visualizations indeed render curves, except they are grayscale since we never include cosmetic features such as color-contrast detectors in our artificial curves. We see their response to curve stimuli approximates the natural curve detectors across a range of radii and all orientations. One difference is our artificial neurons have a slight echo`}
        <d-footnote>{`Activations on the opposite of the curve's most preferred orientation, which we discussed in more depth in Curve Detectors.`}</d-footnote>
        {`, which we believe could be removed by more carefully setting negative weights.`}
      </p>

      <AANNSynthetic mdxType="AANNSynthetic" />
      <p>
        {`We can also get a qualitative sense for the differences by looking at a saliency map of dataset examples that cause artificial curve detectors to fire strongly`}
        <d-footnote>{`Since our artificial curve detectors don't respond to color, there are likely many false-negatives where natural curve detectors correctly catch that our artificial ones don't. Our goal in building artificial curve detectors isn't perfection, but to show that we can use the circuit patterns described in this article to roughly approximate the curve detection algorithm in InceptionV1.`}</d-footnote>
        {`.`}
      </p>

      <Surgery mdxType="Surgery" />
      <p>{`Next we can compare the weights for the circuits connecting neuron families in the two models, alongside feature visualizations for each of those families. We see they follow approximately the same circuit structure.`}</p>

      <AANNCircuit
        data={require('./data/aann-circuit.json')}
        mdxType="AANNCircuit"
      />
      <p>{`We can also zoom into specific weight matrices that we've already studied in this article. We see the raw weights between early curves and curves as well as lines to curves look approximately like the ones in InceptionV1, but cleaner since we set them programmatically.`}</p>

      <AANNWeights
        data={require('./data/aann-weights.json')}
        mdxType="AANNWeights"
      />
      <p>
        {`Our final experiment to compare artificial curve neurons with natural curve neurons is to do artificial neuron surgery to replace InceptionV1's curve neurons with ours to see how they impact model performance. A preliminary experiment suggests that adding artificial curve detectors helps recover some of the loss across the dataset of removing them from the model entirely`}
        <d-footnote>
          {`Specifically, when we remove InceptionV1’s 3b curve detectors entirely, the model’s top-5 accuracy across 2000 validation set images drops from 88.6% to 86.3%. When we replace 3b curve detectors with our artificial curve detectors more than half of this drop is recovered, with an accuracy of 87.6%. We suspect that tuning normalization or adding in color contrast detectors to our currently grayscale artificial curve neurons are low hanging fruit for reducing this gap. `}
          <br />
          <br />
          {`There are two caveats worth mentioning. First, we're likely not mimicking the exact conditions the model was trained under, since it was trained at Google using a precursor to the Tensorflow library that no longer exists. Secondly, the reason we ran it on less than the full validation set was operational, not a result of cherry-picking. We initially ran it on a small set in a prototype experiment to validate our hypothesis. We planned to run it on the full set before our publication date, but due OpenAI infrastructure changes this was harder than expected and we were unable to. For this reason we emphasize that the experiment is preliminary, although we suspect it's likely to work on the full validation set as well.`}
        </d-footnote>
        {`.`}
      </p>
      <p>{`Overall, we believe these five experiments show our artificial curve detectors are roughly analogous to the naturally trained ones. Since they are nearly a direct translation from the neuron families and circuit motifs we've described in this article into Python code for setting weights, we think this is strong evidence these patterns accurately reflect the underlying circuits that construct curve detectors.`}</p>
      <hr />
      <h2 id="downstream">Downstream</h2>
      <p>{`While this article focused mostly on how curve detection works upstream of the curve detector, it's also worth briefly considering how curves are used downstream in the model. It's easiest to see their mark on the next layer, 4a, where they're used to construct more sophisticated shapes.`}</p>
      <p>
        {`The curve neurons in 3b are used to build more complex and specific shape detectors such as `}
        <a
          parentName="p"
          {...{
            href: 'https://distill.pub/2020/circuits/early-vision/',
          }}
        >{`sophisticated curves`}</a>
        {`, `}
        <a
          parentName="p"
          {...{
            href:
              'https://distill.pub/2020/circuits/early-vision/#group_mixed3b_circles_loops',
          }}
        >{`circles`}</a>
        {`, `}
        <a
          parentName="p"
          {...{
            href:
              'https://distill.pub/2020/circuits/early-vision/#group_mixed3b_curve_shapes',
          }}
        >{`S-shapes`}</a>
        {`, `}
        <a
          parentName="p"
          {...{
            href:
              'https://distill.pub/2020/circuits/early-vision/#group_mixed3b_curve_shapes',
          }}
        >{`spirals`}</a>
        {`, `}
        <a
          parentName="p"
          {...{
            href:
              'https://distill.pub/2020/circuits/early-vision/#group_mixed3b_divots',
          }}
        >{`divots`}</a>
        {`, and `}
        <a
          parentName="p"
          {...{
            href:
              'https://distill.pub/2020/circuits/early-vision/#group_mixed3b_evolute',
          }}
        >{`“evolutes"`}</a>
        {` (a term we’ve repurposed to describe units detecting curves facing away from the middle). `}
      </p>
      <p>{`Many of these shapes look for individual curves at different spatial positions, such as circles and evolutes. These shapes often reappear across different branches of 4a, such as the 3x3 and 5x5 branch. `}</p>

      <Downstream mdxType="Downstream" />
      <p>
        {`Layer 4a also constructs a series of curve detectors, mostly in the 5x5 branch that specializes in 3d geometry. However, we believe they should be thought of less as pure abstract shapes and more as corresponding to specific worldly objects, like `}
        <a
          parentName="p"
          {...{
            href:
              'https://microscope.openai.com/models/inceptionv1/mixed4a_0/406',
          }}
        >{`4a:406`}</a>
        {` which often detects the top of cups and pans.`}
      </p>
      <PrevNext mdxType="PrevNext" />
      <Todos mdxType="Todos" />
    </MDXLayout>
  )
}

MDXContent.isMDXComponent = true