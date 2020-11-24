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
    <figcaption style={{ alignSelf: 'center', width: 704 }}>
      Since the connections between individual neurons in neuron families within
      the curve circuit implement rotational equivariance, we can get a sense of
      how the families connect just by looking at the strongest positive and
      negative connection. Additionally, we see that neuron family transitions,
      such as the transition between lines and curves, recur in the same model.
    </figcaption>
  </Figure>
)
