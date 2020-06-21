import cofab from 'pages/cofab'
import { Surface, Text } from 'components/ui'
import { featureVis } from 'components/helpers'

export default cofab(({ neuronVis, items, layer }) => {
  const size = 60
  return (
    <Surface flexFlow="row">
      <div>
        <img src={neuronVis} width={size} height={size} />
      </div>
      {items.map(({ value, neuron }) => (
        <Surface>
          <img
            width={size}
            height={size}
            src={featureVis('inceptionv1', layer, neuron)}
          />
          <Text>{value.toFixed(2)}</Text>
        </Surface>
      ))}
    </Surface>
  )
})
