import fetchGradients from 'components/fetchGradients'
import Tiles from 'components/tiles'
import { Spinner } from 'evergreen-ui'
import { scaleLinear } from 'd3-scale'
import React from 'react'
import { Surface, Text } from 'components/ui'
import { featureVis } from 'components/helpers'

const line = (
  <svg
    width="505"
    height="140"
    viewBox="0 0 505 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.54"
      d="M369.414 81.4142C370.195 80.6332 370.195 79.3668 369.414 78.5858L356.686 65.8579C355.905 65.0768 354.639 65.0768 353.858 65.8579C353.077 66.6389 353.077 67.9052 353.858 68.6863L365.172 80L353.858 91.3137C353.077 92.0948 353.077 93.3611 353.858 94.1421C354.639 94.9232 355.905 94.9232 356.686 94.1421L369.414 81.4142ZM121 82H368V78H121V82Z"
      fill="black"
      fill-opacity="0.6"
    />
  </svg>
)

export default class CurveWeights2 extends React.Component {
  state = { weights: null }

  componentWillMount() {
    fetchGradients('inceptionv1', 'mixed3a', 'mixed3b').then((weights) => {
      this.setState({ weights })
    })
  }

  render() {
    const { weights } = this.state

    if (!weights) {
      return <Spinner />
    }

    const size = 90
    const top = 35
    const row = (upstreamNeuron, neuron) => (
      <Surface position="relative">
        <Surface position="absolute" left={50} top={top}>
          <img
            width={size}
            height={size}
            style={{ borderRadius: 5 }}
            src={featureVis('InceptionV1', 'mixed3a', upstreamNeuron)}
          />
        </Surface>
        {line}
        <Surface
          position="absolute"
          left={200}
          top={top}
          borderRadius={5}
          border="1px solid rgba(0, 0, 0, 0.2)"
          overflow="hidden"
        >
          <Tiles
            size={size}
            scale={scaleLinear().domain([
              0,
              35,
              // max(flatten(weights[upstreamNeuron][neuron])),
            ])}
            grad={weights[upstreamNeuron][neuron]}
          />
        </Surface>

        <Surface position="absolute" right={40} top={top}>
          <img
            width={size}
            height={size}
            style={{ borderRadius: 5 }}
            src={featureVis('InceptionV1', 'mixed3b', neuron)}
          />
        </Surface>
      </Surface>
    )

    const Annotate = ({ children, x, y, size = 40 }) => (
      <Surface position="relative">
        <Surface
          width={size}
          borderRadius={size}
          height={size}
          left={x}
          top={y}
          zIndex={1000}
          position="absolute"
          border="2px solid rgba(0, 0, 0, 0.6)"
        />
        {children}
      </Surface>
    )

    return (
      <Surface gridColumn="screen" alignItems="center" marginBottom={20}>
        <Surface alignItems="center">
          <Surface flexFlow="row">
            <Surface>
              <Annotate x={190} y={42}>
                {row(147, 379)}
              </Annotate>
            </Surface>
            <Annotate x={244} y={41}>
              {row(71, 340)}
            </Annotate>
          </Surface>
        </Surface>
      </Surface>
    )
  }
}
