import { Surface, Text } from 'components/ui'
import { featureVis } from 'components/helpers'
import React from 'react'
import cofab from './cofab'
import { range } from 'lodash'
import { interpolateOrRd, interpolateYlGn } from 'd3-scale-chromatic'
import { scaleLinear } from 'd3-scale'

function isFloat(n) {
  return n === +n && n !== (n | 0)
}

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

export default cofab(({ tiles: tileMatrix, size = 20, neurons }) => {
  const rows = tileMatrix.length
  const cols = tileMatrix[0].length
  console.log('tile matrix', tileMatrix)
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
      {neurons.map((neuron) => (
        <img
          width={size}
          height={size}
          src={featureVis('inceptionv1', 'mixed3a', neuron)}
        />
      ))}
      {range(rows).map((row) => (
        <React.Fragment>
          <img
            width={size}
            height={size}
            src={featureVis('inceptionv1', 'mixed3a', neurons[row])}
          />
          {range(cols).map((col) =>
            true ? (
              <Surface
                width={size}
                height={size}
                background={
                  tileMatrix[row][col] > 0
                    ? interpolateYlGn(scale(tileMatrix[row][col]))
                    : interpolateOrRd(scale(-tileMatrix[row][col]))
                }
              />
            ) : (
              <Tiles
                size={size}
                grad={tileMatrix[row][col]}
                hasBorder={true}
                scale={scale}
              />
            )
          )}
        </React.Fragment>
      ))}
    </Surface>
  )
})
