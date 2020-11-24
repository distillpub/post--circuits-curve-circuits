import { Surface, Text } from 'components/ui'

const figureWidth = 500
export default () => (
  <Surface gridColumn="screen" alignItems="center" marginTop={-10}>
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
    <figcaption style={{ marginBottom: 15, marginTop: 10, width: 704 }}>
      In this article we reverse-engineer the curve detection algorithm we
      studied in{' '}
      <a href="https://distill.pub/2020/circuits/curve-detectors/">
        Curve Detectors
      </a>{' '}
      and reimplement it from scratch. On the
      <em>artificial artificial neural network</em> from scratch that
      reimplements curve detection.
    </figcaption>
  </Surface>
)
