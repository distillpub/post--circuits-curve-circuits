import React from 'react'
import { Surface, Text, ZoomedImg } from 'components/ui'

import { Icon } from 'evergreen-ui'
import Figure from 'components/figure'
import { range } from 'lodash'
import Tiles from 'components/tiles'
import { scaleLinear } from 'd3-scale'
import cofab from 'pages/cofab'
import { featureVis } from 'components/helpers'

export const getInitialProps = () => {
  return {}
}

const leftWidth = 150
const size = 90

const Header = ({ title, children, layerIndex }) => (
  <Surface
    width={size * 2}
    gridRow="header"
    gridColumn={`layer ${layerIndex + 1}`}
  >
    <Text
      borderBottom="1px solid rgba(0, 0, 0, 0.1)"
      paddingBottom={2}
      paddingLeft={3}
      fontWeight={600}
      marginBottom={12}
      fontSize={16}
    >
      {title}
    </Text>
    <figcaption style={{ paddingLeft: 3, height: 50, paddingRight: 3 }}>
      {children}
    </figcaption>
  </Surface>
)

const layerWidth = size * 2

const Circuit = ({ weights, model, title, padding, fvs }) => {
  const scale = scaleLinear().domain([0, 1])
  return (
    <React.Fragment>
      <Text
        alignSelf="flex-start"
        width={leftWidth}
        gridRow={model}
        gridColumn="model"
      >
        {title}
      </Text>
      {weights.map((weight, index) => (
        <React.Fragment>
          {index < weights.length - 1 && (
            <Surface
              alignItems="center"
              justifyContent="center"
              gridRow={model}
              gridColumn={`arrow ${index + 1}`}
            >
              <Icon icon="arrow-right" size={20} opacity={0.4} />
            </Surface>
          )}
          <Surface
            flexFlow="row"
            border="1px solid rgba(0, 0, 0, 0.2)"
            borderRadius={5}
            width={layerWidth}
            gridRow={model}
            gridColumn={`layer ${index + 1}`}
            overflow="hidden"
          >
            <Tiles size={size} hasBorder={false} grad={weight} scale={scale} />
            <ZoomedImg
              size={size}
              padding={padding(index)}
              style={{
                borderRadius: 0,
                borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
              }}
              src={fvs[index]}
            />
          </Surface>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default cofab(({ weights, fvs, naturalWeights, naturalNeurons }) => {
  const arrowWidth = 30
  return (
    <Figure>
      <Surface
        alignItems="center"
        alignSelf="center"
        display="grid"
        gridGap={10}
        gridTemplateRows="[header] 120px [aann] auto [inceptionv1] auto"
        gridTemplateColumns={`[model] 150px [layer] ${layerWidth}px [arrow] ${arrowWidth}px [layer] ${layerWidth}px [arrow] ${arrowWidth}px [layer] ${layerWidth}px [arrow] ${arrowWidth}px [layer] ${layerWidth}px [arrow] ${arrowWidth}px [layer] ${layerWidth}px`}
      >
        <Surface width={leftWidth}></Surface>
        <Header title="conv2d0" layerIndex={0}>
          The first later constructs a family of Gabor Filters using a 7x7
          convolution.
        </Header>
        <Header title="conv2d1" layerIndex={1}>
          A 1x1conv builds Complex Gabor Filters, invariant to small
          translations.
        </Header>
        <Header title="conv2d2" layerIndex={2}>
          Complex Gabor Filters are tiled to create a Line family.
        </Header>
        <Header title="3a" layerIndex={3}>
          Lines are composed to create Early Curves.
        </Header>
        <Header title="3b" layerIndex={4}>
          Finally, both models tile lines and curves from 3a to construct curve
          detectors.
        </Header>
        <Circuit
          title="Artificial AANN"
          model="aann"
          weights={weights}
          padding={(index) => [30, 20, 30, 20, 10][index]}
          fvs={fvs}
        />
        <Circuit
          title="Natural InceptionV1"
          model="inceptionv1"
          weights={naturalWeights}
          padding={(index) => 0}
          fvs={naturalNeurons.map(({ layer, neuron }) =>
            featureVis('inceptionv1', layer, neuron)
          )}
        />
      </Surface>
      <figcaption style={{ alignSelf: 'center', width: 704, marginTop: 20 }}>
        A comparison of the most important family in each layer across our
        artificial artificial neural network with InceptionV1 trained on
        ImageNet.
      </figcaption>
    </Figure>
  )
})
