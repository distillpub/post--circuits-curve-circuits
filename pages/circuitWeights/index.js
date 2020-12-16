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
      Some of the strongest positive and negative weights between neuron
      families in the curve circuit. We see two patterns. First, the most
      positive weights tend to be where shapes are aligned, and the most
      negative are where shapes are in opposing orientations. Secondly, we see
      the same transitions can occur multiple times across different layers,
      such as the transition from lines to curves.
    </figcaption>
  </Figure>
)
