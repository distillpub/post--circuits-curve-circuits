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
      <Row>Introduction</Row>
      <Row>Three Families</Row>
      <Row>The Curve Family</Row>
      <Row>The Line Family</Row>
      <Row>The Texture Family</Row>
      <Row>Back to the Input</Row>
      <Row>An Artificial Artificial Neural Network</Row>
      <Row>Conclusion</Row>
    </nav>
  </Surface>
)
