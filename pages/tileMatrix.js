import { Surface, Text } from 'components/ui'
import { featureVis } from 'components/helpers'
import cofab from './cofab'
import { range } from 'lodash'
import { interpolateOrRd, interpolateYlGn } from 'd3-scale-chromatic'
import { scaleLinear } from 'd3-scale'
import Tiles from 'components/tiles'

export default cofab(({ tiles: tileMatrix, size = 20, neurons }) => {
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
