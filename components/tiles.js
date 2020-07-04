import { Surface } from 'components/ui'
import { interpolateOrRd, interpolateYlGn } from 'd3-scale-chromatic'

export default ({ grad, scale, size, hasBorder = true }) => {
  const tileSize = size / grad.length

  return (
    <Surface
      border={!hasBorder ? 'none' : '1px solid rgba(0, 0, 0, 0.2)'}
      overflow="hidden"
      borderRadius={hasBorder ? 5 : 0}
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
