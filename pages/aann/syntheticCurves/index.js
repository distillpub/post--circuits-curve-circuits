import { Surface } from 'components/ui'
import figure from './figure.png'

export default () => (
  <Surface gridColumn="screen" alignItems="center" marginY={20}>
    <img
      src={figure}
      width={1200}
      style={{
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
      }}
    />
  </Surface>
)
