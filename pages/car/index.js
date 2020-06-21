import { Surface, Text } from 'components/ui'

export default () => {
  return (
    <Surface flexFlow="row" alignItems="center">
      <img src={require('./equation.svg')} />
      <Surface marginLeft={20}>
        <Text>
          <d-math>f</d-math> = Activations of 3b curve family in original model.
        </Text>
        <Text>
          <d-math>fhat</d-math> = Activations of 3b curve family in edited
          model.
        </Text>
      </Surface>
    </Surface>
  )
}
