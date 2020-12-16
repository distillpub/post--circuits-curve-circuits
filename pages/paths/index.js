import Figure from 'components/figure'
import figure from './figure.png'

export default () =>
  typeof window === 'undefined' ? null : (
    <Figure>
      <img
        src={figure}
        style={{
          alignSelf: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}
        width={1300}
      />

      <figcaption style={{ alignSelf: 'center', width: 704 }}>
        We can visualize how neuron families connect to see a high-level view of
        the curve detection algorithm of InceptionV1. In addition to giving us a
        sense of how these families are built, it lets us see how information
        flows to 3b curves. For instance, we see that conv2d2 lines contribute
        to 3b curves through both 3a lines and 3a early curves. While it may
        seem like this throws away lots of information, in a sense this a
        natural way to understand a circuit. It’s much easier to think about a
        line family in conv2d2 than 33 individual line neurons that vary in
        orientation.
      </figcaption>
    </Figure>
  )
