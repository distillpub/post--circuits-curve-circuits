import { Surface, Text } from 'components/ui'
import Figure from 'components/figure'
import artificial from './artificial.png'
import natural from './natural.png'

const figureWidth = 509
export default () => (
  <Figure>
    <Surface
      alignSelf="center"
      display="grid"
      gridTemplateColumns={`[natural] ${figureWidth}px [aann] ${figureWidth}px`}
      gridTemplateRows="[label] auto [figure] auto"
      gridGap={20}
    >
      <Text
        borderBottom="1px solid rgba(0, 0, 0, 0.1)"
        paddingBottom={3}
        gridRow="label"
        gridColumn="aann"
        paddingLeft={3}
        fontSize={18}
      >
        Artificial Curve Neurons
      </Text>
      <Text
        gridRow="label"
        gridColumn="natural"
        borderBottom="1px solid rgba(0, 0, 0, 0.1)"
        paddingBottom={3}
        paddingLeft={3}
        fontSize={18}
      >
        Natural InceptionV1 Curve Neurons
      </Text>
      <img
        src={artificial}
        style={{
          gridRow: 'figure',
          gridColumn: 'aann',
          mixBlendMode: 'darken',
          width: figureWidth,
        }}
      />
      <img
        src={natural}
        style={{
          width: figureWidth,
          gridRow: 'figure',
          mixBlendMode: 'darken',
          gridColumn: 'natural',
        }}
      />
    </Surface>
    <figcaption style={{ width: 704, alignSelf: 'center', marginTop: 20 }}>
      We can compare the curve detectors in a neural network we hand-crafted
      with the curve detectors in InceptionV1 by measuring how they activate to
      synthetic curve stimuli. We see that across a range of radii and
      orientations, our artificial curve neurons apprxoximate the natural ones.
    </figcaption>
  </Figure>
)
