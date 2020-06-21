import Neuron from 'components/neuron'
import H2 from 'components/h2'
import H3 from 'components/h3'
import Sidebar from 'pages/sidebar'
import PrevNext from 'components/prevNext'

<Sidebar />

<div>
<PrevNext />
<p>In Curve Detectors we studied a family of neurons in 3b that respond to curves and asked "how do they behaved. We used techniques like feature visualization and dataset examples as well as tools inspired by neuroscience like tuning curves and synthetic examples. In this article we'll push further than neuroscientists are usually able to because we have access to the weights between neurons. We'll be asking "how do curve neurons work?" and we'll read interpretable low-level vision algorithms directly off the weights of a nueral network.</p>

<p>In this section we'll analyze the three most important families in the construction of curves: early curves, lines, and textures.</p>

<p>Before diving into each family, let's look at ways to understand weights between neuron families.</p>
</div>

## Reading Weights

The contribution of each neuron family to the creation of curves is actually quite complex. Recall that this is a convolutional layer, so the weights between neurons is a matrix of how the input neuron influences the output neuron at various relative positions. In our case, these will be 5x5 matrices.

For example, if we look at the connection between a neuron in the early curve family and a curve neuron that we looked at in the last section, we see a 5x5 matrix.



Inspecting this grid of the 25 weights between this pair of neurons is already quite complex and interesting (we’ll return to it later!). But once we have a couple dozen neurons interacting with a dozen other neurons, that results in trying to analyze thousands of weights!


In principle, the above grid contains essentially everything we’ll say in this section. In practice, it’s pretty hard to understand (and there’s a lot of interesting details one could easily miss!) raw weight matrices so the rest of this section will be spent walking through and contextualizing it.
With that said, there’s one thing that’s worth noting: those weights are definitely not random. Even a cursory glance shows structure, even if we aren't sure what to make of it yet. This should give us hope that, with some effort, we can uncover an interesting story.
## How Important is Each Family?

Before we invest too much energy investigating how each of these families of neurons contribute to later curve detectors, it seems prudent to ask how important each one is. Are they all equally important?

One way to get a sense for the answer is to look at norm of the weight matrices of each family. This shows that curves contribute the most, but that others are not insignificant. However, there’s no guarantee that weight norms reflect the functional importance of each group (for example, one set of neurons in the previous layer could be more reactive).

To get a second perspective we can look at how each family influences the activations of curves in practice. Intuitively, if cutting out a family stops curve from behaving properly, it must be important.

To measure this we can zero out the weight matrix from 3a to 3b except for one family at a time. Then we can collect activations from dataset examples in both the original model (ff) and the edited model with only one neuron family and compare them with the following equation we call circuit activation reconstruction (CAR). Families with higher circuit activation reconstruction are more influential towards that neuron's behavior.


In addition to this metric, we can use feature visualization and decomposed feature visualization to help understand how curves use each family. We see that the early curve family is the most important, then lines, and finally textures. Secondly, we see in the feature visualization that each family's contribution is qualitatively different.


Let's go through each family in order of importance to understand them with more depth.

## Early Curve Family

Measured by weight magnitude and circuit activation reconstruction, early curve neurons are the most important family in the construction of curve neurons.

Let's start our exploration by looking at the strongest connection between an early curve and a curve in 3b. We see that the curve in 3b is the same orientation as the one in 3a, and the weights contain a curve of strong positive weights surrounded by weak negative weights. In fact, this pattern is true for every early curve.



At every position curve neurons are excited by early curves in a similar orientation and inhibited by ones in the opposing orientation. It turns out there are curves of curves literally inscribed in the weights of neural networks.

There are a couple other subtle things you can find if you look closely. For example, you can see that the weights shift slightly over the course of the curve, to track the change in local curvature.


Another interesting phenomenon is that curve detectors in the same orientation are slightly inhibitory when they’re located off the curve.



Now that we understand the strongest positive and negative weights between early curves and curves, let's take another look at the full weight matrix.
We see a striking set of positive weights lining the diagonal. These are the result of positive weights between curves of similar orientations. Conversely, there are lines of negative weights where orientations are mismatched. We can see that the transitions between these extremes is smooth — if a curve wants to see an early curve strongly it usually wants to see its neighbor weakly.

Why do we see that curve detectors which are rotated 180 degrees from each other are inhibitory, but not ones rotated 90 degrees? Recall from our previous article that early curve detectors respond slightly to curves that are 180 degrees rotated from their prefered orientation, which we called an echo. This makes sense: a curve in the opposite orientation runs tangent to the curve we’re trying to detect in the middle of the receptive field, causing similar edge detectors to fire.

Curve detectors at 3b seem to not fire for curves in the opposite orientation as the result of these negative weights. We can see this by removing negative weights and visualizing their behavior with radial tuning curves, which we introduced in curve detectors.


Using negative weights in this way follows a more general trend: our experience is the negative weights are used for things that are in some way similar enough that they could be mistaken. This seems potentially analogous to [lateral inhibition](https://en.wikipedia.org/wiki/Lateral_inhibition) in biological neural networks.

## Aside: Equivariance

There’s a final aspect of the early curve to curve connection that strikes us as especially notable: it’s an equivariant circuit<d-footnote><a href="https://en.wikipedia.org/wiki/Equivariant_map">Equivariance</a> is when a type of transformation to the input causes features to transform in a parallel way. For example, convolutional neural networks are equivariant to translation: if you translate the input, a translated version of the same features fire.<d-footnote>Modulo concerns about pooling, strided convolutions, etc.</d-footnote> Creating neural networks which are equivariant to additional symmetries by design is an active -- and  our view, exciting -- area of research <d-cite></d-cite> [taco, tess, one gabor to rule them all].</d-footnote>.

As we’ve dug into InceptionV1, we’ve discovered many naturally occurring equivariant neuron families. Curve detectors are one example of a feature family that is equivariant to rotation (different units detect the same curve feature rotated) but we’ve also observed many others. <d-footnote>Other feature families that are equivariant to rotation: gabors, edge detectors, high-low frequency detectors, brightness gradient detectors, color contrast detectors, boundary detectors, oriented fur detectors. Features that are equivariant to horizontal flips: oriented dog head detectors, spirals. Features that are equivariant to color: color center-surround units, color contrast units.</d-footnote> The fact that equivariant families naturally occur seems to support equivariant neural networks as an important research direction, and suggest that the study of what features are naturally learned might be helpful in informing their design.

But what we see with curves isn’t just an equivariant feature family. We see two equivariant curve detector families connected by weights that reflect the equivariant structure. In particular, there’s a special generalization of a convolution, called a group convolution, which can be used to encode symmetries like rotation. What we see in the weights between the two families appears to be approximately a group convolution. For example, if you look at the weights between curves in the same orientation, they are approximately rotated versions of the same weight template:



We’ll discuss equivariance in more detail in a later essay.

## Line Family

When compared to the visually consistent family of early curves, the line family is tricky. At first glance it seems to consist of up to three distinct sets of neurons: simple lines, wide lines with thick combing patterns along their edge, and lines with a second line that form an angle. These neurons do indeed behave differently, and a more detailed name for this family could be "line and line-like". However, we believe these neurons are accomplishing similar goals, at least from the perspective of the curve circuit, which led us to consider them one family.

(todo: figure showing different types of lines)
Revealing how the curves use the line family will require more than simply looking at the weight matrix as we did with the early curve family.

Recall that each of the 5x5 weight positions for each curve neuron has a connection to every line. We can use this to render a visualization in each of the 5x5 positions that shows which lines it activate it. In this case we'll use a tuning curve of synthetic lines, allowing us to see which orientations activate that position.

Just like we found with the early curve family, line neurons seem most active across the tangent of curves.


One difference between lines and early curves is that lines are far more selective in orientation. We saw before that if a curve is activated by an early curve it is likely weakly activated by its neighbor. But with lines that isn't true — curves often wish to see a specific edge or none at all. In fact, edges that are just a slight tilt from each other can have opposite weights.


We can take a deeper look at line selectively by using radial tuning curves to see their response to synthetic lines as they are rotated.

Simple line detectors activate in response to a range of orientations, and collectively the simple line detectors span all 180°.



But when we look at neurons that aren't simple line detectors, we see a different pattern. They are sensitive to two ranges of orientation. Additionally, they all seem to have a sharp transition period near the vertical position.


We believe that this transition is an important part of the story of these line-like neurons. Many curves would like to be robust to a range of tilted lines going in one direction, so it can activate to imperfect curves or curves of different radiuses, but they strongly don't want to see an edge facing the other direction, even if it's only slightly leaning that way. These line-like neurons are how they accomplish this.

Line-like neurons are an interesting example of non-linear behavior. We sometimes think of neurons pattern matching a gaussian distributed around an ideal stimuli in some space, such as orientation in the space of lines. But line-like features are more like capacitors in electronic circuits, with one consistent behavior until a cliff when behavior sharply changes.

## Texture Family

The texture family is vast but weak. Its 65 neurons detect a variety of patterns and freqencies, allowing curves to be robust to many real-world curves.



While this family is collectively strong, at {circuitReconstructions['textures']}% circuit activation reconstruction, the individual neurons have such minor weights to curves that they appear near-invisible when placed alongside the early curve and line families. To fix this we can use dimensionility reduction to strike a balance between studying neurons as one family and studying them individually.

We can use non-negative matrix factorization (NMF) to create a few groups that represent combinations of neurons. By summing the weights of the neurons each group repressents we can think of them as single units with comparable weight magnitude to lines and early curves.


## Back to the Input

Now that we understand the most important families in 3a in depth, let's take a lighter look at how earlier layers build up to curves, starting from the first layer.


In a future article we'll go further and create curve detectors from scratch by taking an untrained neural network and setting the weights using the core ideas from this diagram.

## Conclusion

In this article we looked at the weights of a neural network and read off an interpretable algorithm: how are the families in 3a used to build the curve neurons in 3b. We saw how the curves in 3a mimic group convolution and how simple lines are supplemented by more specific line-like neurons with sharp peaks at various orientations. We looked at each family in depth, understanding quantatively with circuit activation reconstruction how it impacts the activations of curves, as well as qualitatively understanding the core ideas of each family.

Then we went upstream and looked at how the network transforms pixels into progressively more sophisticated contrast detectors until eventually building the families in 3a that compose into curves.

We hope that curve circuits provides an examplar of what we believe it looks like to study the connections between neurons. We believe that hiding in the weights are sophisticated and creative algorithms that the uses to manipulate its learned abstractions. We believe that these algorithms can be distilled into simple stories, and that these stories reappear across neural network topologies. If true, we believe these learned algorithms may be telling us something rich about the nature of vision that might transcend just the study of neural networks.

<PrevNext />
