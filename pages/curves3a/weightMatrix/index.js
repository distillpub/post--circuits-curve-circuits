import React from 'react'
import { Surface, Text } from 'components/ui'

import { featureVis } from 'components/helpers'
import Figure from 'components/figure'
import Tiles from 'components/tiles'
import weights from 'components/weights'
import { scaleLinear } from 'd3-scale'

export const getInitialProps = () => {
  return {}
}

const red = (
  <svg
    width="77"
    height="77"
    viewBox="0 0 77 77"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="77" height="77" rx="5" fill="white" />
    <rect
      x="1"
      y="1"
      width="75"
      height="75"
      rx="4"
      stroke="black"
      stroke-opacity="0.3"
      stroke-width="2"
    />
    <line opacity="0.3" x1="1" y1="8.5" x2="76" y2="8.49999" stroke="black" />
    <line opacity="0.3" x1="9.5" y1="1" x2="9.5" y2="76" stroke="black" />
    <line
      opacity="0.68"
      x1="21.0976"
      y1="9.25942"
      x2="75.5448"
      y2="63.7066"
      stroke="black"
    />
    <line
      opacity="0.68"
      x1="9.96653"
      y1="20.576"
      x2="64.4137"
      y2="75.0232"
      stroke="black"
    />
    <line
      opacity="0.67"
      x1="42.8284"
      y1="14.1716"
      x2="70.8284"
      y2="42.1716"
      stroke="#B70B1C"
      stroke-width="8"
      stroke-linejoin="bevel"
    />
    <line
      opacity="0.67"
      x1="13.8284"
      y1="42.1716"
      x2="41.8284"
      y2="70.1716"
      stroke="#B70B1C"
      stroke-width="8"
      stroke-linejoin="bevel"
    />
  </svg>
)
const green = (
  <svg
    width="77"
    height="77"
    viewBox="0 0 77 77"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="77" height="77" rx="5" fill="white" />
    <rect
      x="1"
      y="1"
      width="75"
      height="75"
      rx="4"
      stroke="black"
      stroke-opacity="0.3"
      stroke-width="2"
    />
    <line opacity="0.3" x1="1" y1="8.5" x2="76" y2="8.49999" stroke="black" />
    <line opacity="0.3" x1="9.5" y1="1" x2="9.5" y2="76" stroke="black" />
    <line
      opacity="0.68"
      x1="21.0976"
      y1="9.25942"
      x2="75.5448"
      y2="63.7066"
      stroke="black"
    />
    <line
      opacity="0.68"
      x1="9.96653"
      y1="20.576"
      x2="64.4137"
      y2="75.0232"
      stroke="black"
    />
    <line
      opacity="0.67"
      x1="16.738"
      y1="16.3419"
      x2="68.9974"
      y2="68.6012"
      stroke="#27AE60"
      stroke-width="8"
      stroke-linejoin="bevel"
    />
  </svg>
)

class CurveTiles extends React.Component {
  render() {
    const { size = 60, upstream, neurons, noBorder } = this.props
    const { upstreamLayer = 'mixed3a', layer = 'mixed3b' } = this.props
    const scale = scaleLinear().domain([0, 30])

    // curves
    // const upstream = [189, 81, 104, 92, 145, 95, 171, 71, 147]
    // edges
    // const upstream = [154, 57, 69, 146, 101, 187, 27, 150]
    // angles
    // const upstream = [149, 116, 176, 133, 77, 100]
    // angles and edges

    // good view for edges
    // const upstream = [187, 27, 154, 57, 133]
    // const neurons = [406, 324, 379, 388, 385, 340]

    // const neurons = [406, 385, 343, 342, 388, 324, 340, 330, 349, 379]
    // took out 330, 342

    // const upstream = [149, 116, 176, 77, 100]
    // const neurons = [406, 385, 343, 388, 324, 340, 330, 349, 379]

    return (
      <Surface
        display="grid"
        overflow="hidden"
        gridGap={2}
        gridTemplateRows={`repeat(${neurons.length + 1}, ${size}px)`}
        gridTemplateColumns={`repeat(${upstream.length + 1}, ${size}px)`}
        width={(upstream.length + 1) * (size + 2)}
        alignSelf="center"
        borderRadius={noBorder ? 0 : 5}
        background="#EAEAEA"
        border="1px solid rgba(0, 0, 0, 0.3)"
      >
        <Surface width={size} height={size} />
        {upstream.map((upstreamNeuron) => (
          <img
            width={size}
            src={featureVis('InceptionV1', upstreamLayer, upstreamNeuron)}
          />
        ))}
        {neurons.map((neuron) => (
          <React.Fragment>
            <Surface width={size} height={size}>
              <img
                width={size}
                src={featureVis('InceptionV1', layer, neuron)}
              />
            </Surface>
            {upstream.map((upstreamNeuron) => (
              <Tiles
                size={size}
                grad={weights[upstreamNeuron][neuron]}
                hasBorder={false}
                scale={scale}
              />
            ))}
          </React.Fragment>
        ))}
      </Surface>
    )
  }
}

export default () => (
  <Figure>
    <Surface marginLeft={-25}>
      <CurveTiles
        size={70}
        upstream={[189, 81, 104, 92, 145, 95, 171, 71, 147]}
        neurons={[406, 385, 343, 342, 388, 324, 340, 330, 349, 379]}
      />
    </Surface>
    <Surface flexFlow="row" alignSelf="center" marginTop={20}>
      <Surface flexFlow="row" alignItems="center">
        <Surface>{green}</Surface>
        <Text size={500} width={250} marginLeft={15}>
          Curve detectors are excited by earlier detectors in{' '}
          <b>similar orientations</b>
        </Text>
      </Surface>
      <Surface flexFlow="row" alignItems="center">
        <Surface>{red}</Surface>
        <Text size={500} width={250} marginLeft={15}>
          They are inhibited by earlier detectors in{' '}
          <b>opposing orientations</b>
        </Text>
      </Surface>
    </Surface>
  </Figure>
)
