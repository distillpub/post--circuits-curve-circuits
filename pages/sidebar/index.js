import { Surface, Text } from 'components/ui'

const Row = ({ ...props }) => {
  const href = '#' + props.children.trim().replace(/\ /g, '-').toLowerCase()

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
            fontSize: 13,
          }}
          {...props}
        />
      )}
    </Surface>
  )
}

export default () => (
  <Surface
    display="grid"
    alignSelf="start"
    gridColumnStart="1 !important"
    gridColumnEnd="4 !important"
    justifySelf="end"
    marginTop={0}
    paddingRight="3em"
    paddingLeft="2em"
    style={{
      borderRight: `1px solid rgba(0, 0, 0, 0.1)`,
    }}
  >
    <nav>
      <h3>Contents</h3>
      <Row>Overview of the Curve Detector Algorithm</Row>
      <Row>3a Early Curve Family</Row>
      <Row>Aside: Equivariance</Row>
      <Row>Cosmetic Invariance</Row>
      <Row>Artificial Artificial Neural Network</Row>
      <Row>Downstream</Row>
      <Row>Conclusion</Row>
    </nav>
  </Surface>
)
