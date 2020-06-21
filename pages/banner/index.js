import { Surface, Text } from 'components/ui'
import Figure from 'components/figure'

import cofab from 'pages/cofab'
import CurvesRadial from 'pages/radial/radial'

const Layer = cofab(({ neurons, activations, layer }) => {
  return (
    <CurvesRadial
      size={240}
      prerender
      neuronSize={40}
      responsesByNeuron={activations}
      neurons={neurons}
      layer={layer}
      neuronPadding={10}
      fillOpacity={0.4}
      orientationType={'max'}
    />
  )
})

const LayerTitle = ({ children, layer }) => (
  <a href={`https://microscope.openai.com/models/inceptionv1/${layer}_0/`}>
    <Text fontWeight={600} size={500}>
      {children}
    </Text>
  </a>
)

export default () =>
  null && (
    <Figure banner>
      <Surface
        gridColumn="screen"
        paddingX={100}
        marginY={0}
        flexFlow="row"
        alignItems="center"
        justifyContent="space-between"
        paddingY={10}
      >
        <Surface>
          <Surface
            flexFlow="row"
            justifyContent="space-between"
            borderBottom="1px solid rgba(0, 0, 0, 0.2)"
          >
            <LayerTitle layer="conv2d2">conv2d2</LayerTitle>
            <Text>11 neurons</Text>
          </Surface>
          <Layer data={require('../data/curves-conv2d2.json')} />
        </Surface>
        <Surface>
          <Surface
            flexFlow="row"
            justifyContent="space-between"
            borderBottom="1px solid rgba(0, 0, 0, 0.2)"
          >
            <LayerTitle layer="mixed3a">3a</LayerTitle>
            <Text>11 neurons</Text>
          </Surface>
          <Layer data={require('../data/curves-mixed3a.json')} />
        </Surface>
        <Surface>
          <Surface
            flexFlow="row"
            justifyContent="space-between"
            borderBottom="1px solid rgba(0, 0, 0, 0.2)"
          >
            <LayerTitle layer="mixed3b">3b</LayerTitle>
            <Text>10 neurons</Text>
          </Surface>
          <Layer data={require('../data/curves-mixed3b.json')} />
        </Surface>
        <Surface>
          <Surface
            flexFlow="row"
            justifyContent="space-between"
            borderBottom="1px solid rgba(0, 0, 0, 0.2)"
          >
            <LayerTitle layer="mixed4a">4a</LayerTitle>
            <Text>12 neurons</Text>
          </Surface>
          <Layer data={require('../data/curves-mixed4a.json')} />
        </Surface>
      </Surface>
      <Surface alignSelf="center" width={704} marginTop={20} marginBottom={20}>
        <figcaption>
          These radial tuning curves show how each curve neuron in InceptionV1
          responds to curves at different orientations. To create these we
          render images of curves at every degree of rotation, then plot neuron
          activations to these stimuli on a radial line grouped by layer.
        </figcaption>
      </Surface>
    </Figure>
  )
