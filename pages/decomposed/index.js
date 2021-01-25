import React from 'react'
import { Text, Surface } from 'components/ui'
import Figure from 'components/figure'
import cofab from 'pages/cofab'

const layers = [
  {
    name: 'conv2d0',
    caption: (
      <span>
        Gabor Filters line the tangent with secondary influence from the Color
        Contrast family. In InceptionV1 these two families are not as{' '}
        <a href="https://distill.pub/2020/circuits/early-vision/#conv2d0">
          cleanly differentiated
        </a>{' '}
        as in some models.
      </span>
    ),
  },
  {
    name: 'conv2d1',
    caption: (
      <span>
        The tangent is lined primarily by Complex Gabor neurons, which resemble
        Gabor Filters but are invariant to the exact positions of which side is
        dark or light.
      </span>
    ),
  },
  {
    name: 'conv2d2',
    caption: (
      <span>
        The model constructs a large family of well-developed lines family. We
        will discuss these more in{' '}
        <a href="#lines-in-conv2d2">lines in conv2d2</a>.
      </span>
    ),
  },
  {
    name: '3a',
    caption: (
      <span>
        The tangent of 3a is primarily lined by the Early Curve family as well
        as a second Line family. We’ll explore this layer in depth throughout
        this article.
      </span>
    ),
  },
]

const size = 300

export default cofab((data) => (
  <Figure>
    <Surface>
      <Surface flexFlow="row" alignItems="center" alignSelf="center">
        {layers.map(({ name, caption }) => (
          <Surface marginX={10} width={300}>
            <Text
              borderBottom="1px solid rgba(0, 0, 0, 0.1)"
              paddingBottom={-3}
              fontWeight={600}
              fontSize={14}
              paddingLeft={3}
              marginBottom={10}
            >
              {name === '3a' ? 'mixed3a' : name}
            </Text>
            <Surface height={90}>
              <figcaption>{caption}</figcaption>
            </Surface>
            <img src={data[name]} width={size} height={size} />
          </Surface>
        ))}
      </Surface>
      <figcaption style={{ alignSelf: 'center', width: 704, marginTop: 20 }}>
        We use decomposed feature visualization to show how the first four
        layers of InceptionV1 incrementally build towards curve detectors in 3b.
        To increase legibility, we render each feature visualization with alpha
        transparency and grayscale. Since curve detectors are invariant to
        color, the vibrant colors feature visualization produces don't give us
        much information, and they can be distracting. Instead we visualize{' '}
        <a href="https://distill.pub/2020/circuits/curve-detectors/#visualizing-attribution">
          attribution
        </a>
        . To give us a sense of the strength of each position we set the opacity
        relative to its magnitude. We see the highest magnitude weights follow
        the tangent of 3b:379.
      </figcaption>
    </Surface>
  </Figure>
))
