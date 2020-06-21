import Radial from './radialHalf'
import { Surface } from 'components/ui'
import cofab from 'pages/cofab'

const size = 100
const neuronSize = 30
export default cofab(({ radialTuningCurves }) => (
  <Surface
    alignItems="center"
    gridColumn="screen"
    marginTop={10}
    marginBottom={40}
  >
    <Surface flexFlow="row" flexWrap="wrap" paddingX={80}>
      {Object.keys(radialTuningCurves).map((neuron) => (
        <Surface marginX={5}>
          <Radial
            responsesByNeuron={{ [neuron]: radialTuningCurves[neuron] }}
            size={size}
            neurons={[neuron]}
            layer="mixed3a"
            neuronSize={neuronSize}
            neuronPadding={10}
            // maxValue={500}
            fillOpacity={0.4}
            orientationType={'max'}
          />
        </Surface>
      ))}
    </Surface>
  </Surface>
))
