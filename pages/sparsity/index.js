import { featureVis } from 'components/helpers'
import cofab from 'pages/cofab'
import { Surface, Text } from 'components/ui'

export default cofab(({ neurons, familyByNeuron, sortOrder }) => {
  console.log('sort order is', sortOrder)

  return (
    <Surface>
      <Text fontSize={24} margin={30}>
        Sparsity by neuron
      </Text>
      <Surface flexFlow="row" flexWrap="wrap" width={5000} margin={20}>
        {sortOrder.map((index) => (
          <Surface margin={5} width={240}>
            <img
              style={{ borderRadius: 5 }}
              width={40}
              height={40}
              src={featureVis('inceptionv1', 'mixed3a', index)}
            />
            <Text fontSize={10} fontWeight={600}>
              {familyByNeuron[index]} | {neurons[index].toFixed(1)}
            </Text>
          </Surface>
        ))}
      </Surface>
    </Surface>
  )
})
