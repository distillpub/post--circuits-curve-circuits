import Tiles from 'components/tiles'
import { scaleLinear } from 'd3-scale'
import React from 'react'
import { Surface, Text } from 'components/ui'
import { featureVis } from 'components/helpers'
import weights from 'components/weights.json'

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

const isServer = () => typeof window === `undefined`

const AnnotateSelectivity = () => {
  if (isServer()) return null
  const size = 90
  const Row = ({ upstreamNeuron, neuron }) => (
    <Surface
      flexFlow="row"
      marginY={10}
      position="relative"
      alignSelf="center"
      alignItems="center"
    >
      <Surface position="absolute" zIndex={-1} left={-31} top={-32}>
        {line}
      </Surface>
      <img
        width={size}
        height={size}
        style={{ borderRadius: 5 }}
        src={featureVis('InceptionV1', 'mixed3a', upstreamNeuron)}
      />
      <Surface
        marginLeft={55}
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

      <img
        width={size}
        height={size}
        style={{ borderRadius: 5, marginLeft: 110 }}
        src={featureVis('InceptionV1', 'mixed3b', neuron)}
      />
    </Surface>
  )

  return (
    <Surface gridColumn="screen" alignItems="center">
      <Surface>
        <Row upstreamNeuron={147} neuron={379} />
        <Row upstreamNeuron={71} neuron={340} />
      </Surface>
    </Surface>
  )
}

export default AnnotateSelectivity
