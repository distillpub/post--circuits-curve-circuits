import React from 'react'
import { Surface } from 'components/ui'
import { scaleLinear } from 'd3-scale'
import { featureVis } from 'components/helpers'
import fetchGradients from 'components/fetchGradients'
import { max, flatten } from 'lodash'
import Arrow from '@elsdoerfer/react-arrow'

import { Spinner } from 'evergreen-ui'
import Tiles from 'components/tiles'

const highlightColor = `rgba(228, 118, 88, 0.9)`

const neurons = [379, 406, 385, 343, 342, 388, 324, 340, 330, 349]
const upstream = [147, 189, 81, 104, 92, 95, 187, 171, 71, 171]

export default class Weights1 extends React.Component {
  state = { allWeights: null, activeNeuron: neurons[0] }

  componentWillMount() {
    fetchGradients('inceptionv1', 'mixed3a', 'mixed3b').then((allWeights) => {
      this.setState({ allWeights })
    })
  }

  render() {
    const { activeNeuron, allWeights } = this.state
    const { noRow = false } = this.props

    if (!allWeights) {
      return <Spinner />
    }

    const upstreamNeuron = upstream[neurons.indexOf(activeNeuron)]
    const weights = allWeights[upstreamNeuron][activeNeuron]
    console.log('weights are', weights)

    const figureSize = 200
    const tileSize = 90
    const rowWidth = 410
    const neuronSize = 70
    const Row = ({ caption, upstreamNeuron, neuron, figure }) => (
      <Surface alignItems="center">
        <Surface
          width={rowWidth}
          justifyContent="space-between"
          flexFlow="row"
          alignItems="center"
          position="relative"
        >
          <img
            style={{ borderRadius: 5 }}
            width={neuronSize}
            padding={40}
            src={featureVis('InceptionV1', 'mixed3a', upstreamNeuron)}
          />
          {figure}
          <img
            style={{ borderRadius: 5 }}
            width={neuronSize}
            padding={40}
            src={featureVis('InceptionV1', 'mixed3b', neuron)}
          />
          <Surface
            position="absolute"
            left={0}
            zIndex={-1}
            top={'47%'}
            opacity={0.4}
          >
            <Arrow
              arrowHeadFilled={false}
              angle={90}
              lineWidth={2}
              length={rowWidth - neuronSize}
              style={{ width: rowWidth - neuronSize }}
            />
          </Surface>
        </Surface>
        <figcaption style={{ width: 380, marginTop: 5 }}>{caption}</figcaption>
      </Surface>
    )
    const maxValue = max(flatten(allWeights[upstreamNeuron][activeNeuron]))

    return (
      <Surface alignItems="center" gridColumn="screen" marginY={30}>
        <Surface
          flexFlow="row"
          alignItems="center"
          width={900}
          justifyContent="space-between"
        >
          <Row
            caption="The raw weights between the early curve detector and late curve detector in the same orientation are curve of positive weights"
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
      </Surface>
    )
  }
}
