import { Surface, Text } from 'components/ui'
import artificial from './artificial.png'
import Figure from 'components/figure'
import natural from './natural.png'

const figureWidth = 500
export default () => (
  <React.Fragment>
    <h1>Curve Circuits</h1>
    <p style={{ fontSize: '1.4rem', marginBottom: -5 }}>
      We reverse engineer a non-trivial learned algorithm from the weights of a
      neural network and use its core ideas to craft an{' '}
      <i>artificial artificial neural network</i> from scratch that reimplements
      it.
    </p>
    <Figure banner>
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
            width: figureWidth,
            mixBlendMode: 'darken',
          }}
        />
        <img
          src={natural}
          style={{
            width: figureWidth,
            gridRow: 'figure',
            gridColumn: 'natural',
            mixBlendMode: 'darken',
          }}
        />
      </Surface>
      <figcaption
        style={{
          alignSelf: 'center',
          marginTop: 20,
          marginBottom: 25,
          width: 704,
        }}
      >
        We can compare the curve detectors in a neural network we hand-crafted
        with the curve detectors in InceptionV1 by measuring how they activate
        to synthetic curve stimuli. We see that across a range of radii and
        orientations, our artificial curve neurons apprxoximate the natural
        ones.
      </figcaption>
    </Figure>
  </React.Fragment>
)
