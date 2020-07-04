import Figure from 'components/figure'
import figure from './figure.png'

export default () => (
  <Figure>
    <img
      src={figure}
      style={{
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
        transform: 'translateX(-60px)',
      }}
      width={804}
    />
  </Figure>
)
