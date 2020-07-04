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

export default class SimilarOpposing extends React.Component {
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
            padding={40}
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
          style={{ border: '1px solid rgba(0, 0, 0, 0.2)' }}
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
            src={featureVis('InceptionV1', 'mixed3b', neuron)}
            style={{ borderRadius: 5 }}
            padding={40}
            width={size}
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
          style={{ border: '2px solid rgba(0, 0, 0, 0.6)' }}
        />
        {children}
      </Surface>
    )

    return (
      <Surface alignItems="center" marginY={40}>
        <Surface flexFlow="row">
          <Surface>
            <Text alignSelf="center" textAlign="center" size={600} width={370}>
              Curve detectors are excited by earlier detectors in{' '}
              <b>similar orientations</b>
            </Text>
            {row(147, 379)}
            {row(81, 385)}
            {row(71, 340)}
            {row(145, 388)}
          </Surface>
          <Surface>
            <Text alignSelf="center" textAlign="center" size={600} width={330}>
              They are inhibited by earlier detectors in{' '}
              <b>opposing orientations</b>
            </Text>
            {row(145, 379)}

            {row(71, 385)}
            {row(81, 340)}
            {row(147, 388)}
          </Surface>
        </Surface>
      </Surface>
    )
  }
}
