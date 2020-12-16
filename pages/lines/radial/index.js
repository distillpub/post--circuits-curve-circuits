import Radial from './radialHalf'
import { Surface, Text } from 'components/ui'
import cofab from 'pages/cofab'
import { includes, range } from 'lodash'

const neuronSize = 30

let families = [
  {
    name: 'Lines',
    neurons: [227, 0, 75, 146, 69, 169, 57, 154, 27, 134, 150, 240],
  },
  { name: 'Texture Lines', neurons: [47, 142, 6, 101, 16] },
  {
    name: 'Cliffs',
    neurons: [176, 96, 77, 149, 100],
  },
]

const residual = []
range(256).map((neuron) => {
  for (const family of families) {
    if (includes(family.neurons, neuron)) {
      return false
    }
  }
  residual.push(neuron)
})

families.push({ name: 'residual', neurons: residual })

// pages/data/radialLines.json
export default cofab(({ radialTuningCurves, size = 100, name }) => {
  if (typeof window === 'undefined') return null

  const { neurons } = families.filter((f) => f.name === name)[0]

  return (
    <Surface alignItems="center" gridColumn="screen" marginY={20}>
      <Surface
        width={1000}
        flexFlow="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        {neurons.map((neuron) => (
          <Surface margin={10}>
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
  )
})
