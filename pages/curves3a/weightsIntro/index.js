import React from 'react'
import { Surface } from 'components/ui'
import Figure from 'components/figure'
import { scaleLinear } from 'd3-scale'
import { featureVis } from 'components/helpers'
import { max, flatten } from 'lodash'
import Arrow from '@elsdoerfer/react-arrow'
import allWeights from 'components/weights'

import Tiles from 'components/tiles'

const highlightColor = `rgba(228, 118, 88, 0.9)`

const neurons = [379, 406, 385, 343, 342, 388, 324, 340, 330, 349]
const upstream = [147, 189, 81, 104, 92, 95, 187, 171, 71, 171]

const line = (width) => (
  <svg
    width={600}
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

export const getInitialProps = () => {
  return {}
}

export default class Weights1 extends React.Component {
  state = { activeNeuron: neurons[0] }

  render() {
    const { activeNeuron } = this.state
    const { noRow = false } = this.props

    const upstreamNeuron = upstream[neurons.indexOf(activeNeuron)]
    const weights = allWeights[upstreamNeuron][activeNeuron]

    const figureSize = 180
    const tileSize = 90
    const rowWidth = 350
    const neuronSize = 60
    const Row = ({ caption, upstreamNeuron, neuron, figure }) => (
      <Surface alignItems="center">
        <Surface
          width={rowWidth}
          justifyContent="space-between"
          flexFlow="row"
          alignItems="center"
          position="relative"
        >
          <Surface position="relative" width={neuronSize} height={neuronSize}>
            <img
              style={{ borderRadius: 5, zIndex: 100, position: 'absolute' }}
              width={neuronSize}
              padding={40}
              src={featureVis('InceptionV1', 'mixed3a', upstreamNeuron)}
            />
          </Surface>
          <Surface position="relative" width={figureSize} height={figureSize}>
            <Surface position="absolute" left={-8} zIndex={50}>
              {figure}
            </Surface>
          </Surface>
          <Surface position="relative" width={neuronSize} height={neuronSize}>
            <img
              style={{ borderRadius: 5, position: 'absolute', zIndex: 100 }}
              width={neuronSize}
              padding={40}
              src={featureVis('InceptionV1', 'mixed3b', neuron)}
            />
          </Surface>
          <Surface position="absolute" left={-130} top="6%" zIndex={10}>
            {line(rowWidth - neuronSize + 80)}
          </Surface>
          {false && (
            <Surface position="absolute" left={0} zIndex={10} top={'47%'}>
              <Arrow
                color="#999"
                arrowHeadFilled={false}
                angle={90}
                lineWidth={3}
                length={rowWidth - neuronSize}
                style={{ width: rowWidth - neuronSize }}
              />
            </Surface>
          )}
        </Surface>
        <figcaption style={{ width: rowWidth, marginTop: 10 }}>
          {caption}
        </figcaption>
      </Surface>
    )
    const maxValue = max(flatten(allWeights[upstreamNeuron][activeNeuron]))

    return (
      <Figure>
        <Surface
          flexFlow="row"
          alignItems="center"
          alignSelf="center"
          width={900}
          justifyContent="space-between"
        >
          <Row
            caption="The raw weights connecting an early curve neuron and curve neuron of the same orientation contains a curve"
            upstreamNeuron={upstreamNeuron}
            neuron={activeNeuron}
            figure={
              <div
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.2)',
                  overflow: 'hidden',
                  borderRadius: 5,
                }}
              >
                <Tiles
                  size={figureSize}
                  hasBorder={false}
                  scale={scaleLinear().domain([0, maxValue])}
                  grad={weights}
                />
              </div>
            }
          />
          <Row
            caption="This can be interpreted as looking for “tangent curves” at each point along the curve"
            upstreamNeuron={upstreamNeuron}
            neuron={activeNeuron}
            figure={
              <Surface
                width={figureSize}
                height={figureSize}
                overflow="hidden"
                background="rgba(240, 240, 240, 1)"
                border="1px solid rgba(0, 0, 0, 0.2)"
                borderRadius={5}
                position="relative"
              >
                {weights.map((row, rowIndex) => (
                  <Surface flexFlow="row">
                    {row.map((col, colIndex) => (
                      <Surface
                        width={tileSize}
                        height={tileSize}
                        opacity={col / maxValue}
                        position="absolute"
                        zIndex={10}
                        left={
                          (colIndex / (weights.length - 1)) *
                          (figureSize - tileSize)
                        }
                        top={
                          (rowIndex / (weights.length - 1)) *
                          (figureSize - tileSize)
                        }
                      >
                        <img
                          style={{ borderRadius: 5 }}
                          src={featureVis(
                            'InceptionV1',
                            'mixed3a',
                            upstreamNeuron
                          )}
                          width={tileSize}
                          padding={30}
                        />
                      </Surface>
                    ))}
                  </Surface>
                ))}
              </Surface>
            }
          />
        </Surface>
        {!noRow && (
          <Surface flexFlow="row" marginTop={30} marginX={5} alignSelf="center">
            {neurons.map((neuron) => (
              <Surface
                margin={3}
                onMouseEnter={() => this.setState({ activeNeuron: neuron })}
              >
                <Surface
                  overflow="hidden"
                  borderRadius={5}
                  border={`2px solid ${
                    activeNeuron === neuron ? highlightColor : 'transparent'
                  }`}
                  transition="all 300ms ease-out"
                >
                  <img
                    width={50}
                    src={featureVis('InceptionV1', 'mixed3b', neuron)}
                  />
                </Surface>
              </Surface>
            ))}
          </Surface>
        )}
      </Figure>
    )
  }
}
