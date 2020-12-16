import { Surface, Text } from 'components/ui'

const Row = ({ href, tag, children }) => {
  return (
    <Surface>
      {(hovering) => (
        <a
          href={href}
          style={{
            textDecoration: hovering ? 'underline' : 'none',
            color: hovering ? 'black' : `rgba(0, 0, 0, 0.8)`,
            marginTop: 2,
            marginBottom: 2,
            fontWeight: 'bold',
            fontSize: tag === 'H2' ? 13 : 11,
          }}
        >
          {children}
        </a>
      )}
    </Surface>
  )
}

const nav = [
  {
    text: 'Overview of the Curve Detector Algorithm',
    href: '#overview-of-the-curve-detector-algorithm',
    tag: 'H2',
  },
  {
    text: '3a Early Curve Family',
    href: '#3a-early-curve-family',
    tag: 'H2',
  },
  {
    text: 'Aside: Equivariance',
    href: '#aside:-equivariance',
    tag: 'H2',
  },
  {
    text: '3a Line Families',
    href: '#3a-line-families',
    tag: 'H2',
  },
  {
    text: 'Lines',
    href: '#lines',
    tag: 'H2',
  },
  {
    text: 'Texture Lines',
    href: '#texture-lines',
    tag: 'H2',
  },
  {
    text: 'Cliffs',
    href: '#cliffs',
    tag: 'H2',
  },
  {
    text: 'Lines in conv2d2',
    href: '#lines-in-conv2d2',
    tag: 'H2',
  },
  {
    text: 'Cosmetic Invariance',
    href: '#cosmetic-invariance',
    tag: 'H2',
  },
  {
    text: 'Artificial Artificial Neural Network',
    href: '#artificial-artificial-neural-network',
    tag: 'H2',
  },
  {
    text: 'Downstream',
    href: '#downstream',
    tag: 'H2',
  },
  {
    text: 'Conclusion',
    href: '#conclusion',
    tag: 'H2',
  },
]

export default () => (
  <d-contents>
    <nav className="l-text toc figcaption">
      <h3>Contents</h3>
      <div>
        <a href="#overview">Overview of the Curve Circuit</a>
      </div>
      <div>
        <a href="#components">The Components of Curve Detectors</a>
      </div>
      <ul>
        <li>
          <a href="#early-curve-family">3a Curve Neuron Family</a>
        </li>
        <li>
          <a href="#line-families">3a Line Neuron Family</a>
        </li>
        <li>
          <a href="#cosmetic-neurons">Cosmetic Neurons</a>
        </li>
      </ul>
      <div>
        <a href="#artificial-artificial-neural-network">
          An <i>Artificial</i> Artificial Neural Network
        </a>
      </div>
      <div>
        <a href="#downstream">Downstream</a>
      </div>
      <div>
        <a href="#closing-thoughts">Closing Thoughts</a>
      </div>
    </nav>
  </d-contents>
)
