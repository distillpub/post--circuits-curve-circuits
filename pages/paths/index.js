import Figure from 'components/figure'
import figure from './figure.png'

export default ({ isBanner = false }) => (
  <Figure banner={isBanner}>
    <img
      src={figure}
      style={{
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: isBanner ? 40 : 10,
      }}
      width={1200}
    />
  </Figure>
)
