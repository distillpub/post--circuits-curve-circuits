import { Surface, Text } from 'components/ui'
import { featureVis } from 'components/helpers'
import React from 'react'
import cofab from 'pages/cofab'
import { range } from 'lodash'
import { interpolateOrRd, interpolateYlGn } from 'd3-scale-chromatic'
import { scaleLinear } from 'd3-scale'

class Tiles extends React.Component {
  render() {
    let { grad, scale, size, hasBorder = true } = this.props
    const tileSize = size / grad.length

    return (
      <Surface
        style={{
          border: hasBorder && '1px solid rgba(0, 0, 0, 0.2)',
        }}
        overflow="hidden"
        width={size}
        height={size}
      >
        <svg width={size} height={size} fill="black">
          {grad.map((row, rowIndex) =>
            row.map((col, colIndex) => (
              <rect
                strokeWidth={0}
                key={rowIndex + ':' + colIndex}
                x={colIndex * tileSize}
                y={rowIndex * tileSize}
                width={tileSize}
                stroke="black"
                shapeRendering="crispEdges"
                style={{
                  transition: '300ms ease-in all',
                  fill:
                    col > 0
                      ? interpolateYlGn(scale(col) * 0.7)
                      : interpolateOrRd(scale(-col) * 0.7),
                }}
                height={tileSize}
              />
            ))
          )}
        </svg>
      </Surface>
    )
  }
}

const curves3b = [379, 406, 385, 343, 342, 388, 324, 340, 330, 349]

export default cofab(({ weights, size = 20, neurons, neuronIndexOrder }) => {
  const tileMatrix = weights
  console.log('tile matrix', tileMatrix)
  const rows = tileMatrix.length
  const cols = tileMatrix[0].length
  const noBorder = false
  const scale = scaleLinear().domain([0, 1])

  return (
    <Surface
      display="grid"
      overflow="hidden"
      gridGap={1}
      gridTemplateRows={`repeat(${rows}, ${size}px)`}
      gridTemplateColumns={`repeat(${cols + 1}, ${size}px)`}
      borderRadius={noBorder ? 0 : 5}
      background="#EAEAEA"
      style={{ border: !noBorder && '1px solid rgba(0, 0, 0, 0.3)' }}
    >
      <Surface width={size} height={size} />
      {curves3b.map((neuron) => (
        <img
          width={size}
          height={size}
          src={featureVis('inceptionv1', 'mixed3b', neuron)}
        />
      ))}
      {neuronIndexOrder.map((neuronIndex, rowIndex) => (
        <React.Fragment>
          <img
            width={size}
            height={size}
            src={featureVis('inceptionv1', 'mixed3a', neurons[rowIndex])}
          />
          {tileMatrix[neuronIndex].map((curveNeuron) => (
            <Tiles
              size={size}
              grad={curveNeuron}
              hasBorder={true}
              scale={scale}
            />
          ))}
        </React.Fragment>
      ))}
    </Surface>
  )
})
