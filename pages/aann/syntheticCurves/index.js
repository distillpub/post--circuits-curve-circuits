import { Surface, Text } from 'components/ui'
import Figure from 'components/figure'

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
        src={require('./artificial.png')}
        style={{
          gridRow: 'figure',
          gridColumn: 'aann',
          width: figureWidth,
        }}
      />
      <img
        src={require('./natural.png')}
        style={{
          width: figureWidth,
          gridRow: 'figure',
          gridColumn: 'natural',
        }}
      />
    </Surface>
    <figcaption style={{ width: 704, alignSelf: 'center', marginTop: 20 }}>
      We can compare the curve detectors in our artificial artificial neural
      network against the curve detectors in a naturally trained InceptionV1. We
      see our artificial artificial neurons approximate the neurons in
      InceptionV1.
    </figcaption>
  </Figure>
)
