import { Surface, Text } from 'components/ui'
import Figure from 'components/figure'
import cofab from 'pages/cofab'
import { featureVis } from 'components/helpers'
import { find, sortBy, reverse, includes } from 'lodash'
import React from 'react'
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

const allLayers = ['conv2d0', 'conv2d1', 'conv2d2', 'mixed3a', 'mixed3b']

export default cofab(({ allConnections, allFamilies }) => {
  console.log('all families', allFamilies)
  const layerFamilies = allFamilies
  const familiesByLayer = {}
  allLayers.map(
    (layer, index) => (familiesByLayer[layer] = layerFamilies[index])
  )

  console.log('all connections are', allConnections)
  const getConnection = (familyA, familyB) => {
    return find(allConnections, (c) => {
      return (
        c.familyA.toLowerCase() === familyA.toLowerCase() &&
        c.familyB.toLowerCase() === familyB.toLowerCase()
      )
    })
  }

  const scale = scaleLinear().domain([0, 0.3])

  return (
    <Surface flexFlow="row" marginY={10}>
      {allLayers.slice(0, -1).map((layerA, index) => {
        const topConnections = reverse(
          sortBy(
            allConnections.filter((c) => {
              if (c.familyB === 'Line Ends') return false
              if (layerA === 'mixed3a') {
                return c.layerA === layerA && c.familyB === 'Curves'
              }
              return (
                c.layerA === layerA &&
                includes(familiesByLayer[c.layerA], c.familyA) &&
                includes(familiesByLayer[c.layerB], c.familyB)
              )
            }),
            'norm'
          )
        ).slice(0, 7)

        return (
          <Surface marginX={30}>
            <Text
              marginBottom={3}
              paddingBottom={3}
              borderBottom="1px solid rgba(0, 0, 0, 0.2)"
              fontSize={16}
              fontWeight={500}
            >
              {layerA}
            </Text>

            {topConnections.map(
              ({
                familyA,
                familyB,
                connection,
                unitA,
                unitB,
                layerA,
                layerB,
              }) => (
                <Surface>
                  <Text fontSize={13} fontWeight={600}>
                    {familyA} to {familyB}
                  </Text>
                  <Surface
                    flexFlow="row"
                    border="1px solid rgba(0, 0, 0, 0.2)"
                    borderRadius={5}
                    overflow="hidden"
                  >
                    <img
                      width={80}
                      src={featureVis('inceptionv1', layerA, unitA)}
                    />
                    <Tiles
                      hasBorder
                      scale={scaleLinear().domain([
                        0,
                        {
                          conv2d0: 0.3,
                          conv2d1: 0.2,
                          conv2d2: 0.5,
                          mixed3a: 0.2,
                        }[layerA],
                      ])}
                      grad={connection}
                      size={80}
                    />
                    <img
                      width={80}
                      src={featureVis('inceptionv1', layerB, unitB)}
                    />
                  </Surface>
                </Surface>
              )
            )}
          </Surface>
        )
      })}
    </Surface>
  )
})
