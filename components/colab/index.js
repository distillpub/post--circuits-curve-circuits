import { Surface } from 'components/ui'

export default ({ href, ...styles }) => (
  <Surface
    background="rgba(255, 255, 255, 0.75)"
    paddingX={4}
    paddingY={2}
    borderRadius={4}
    fontSize={11}
    color="#aaa"
    fontWeight={300}
    border="solid 1px rgba(0, 0, 0, 0.08)"
    borderBottomColor="rgba(0, 0, 0, 0.15)"
    textTransform="uppercase"
    display="inline-block"
    {...styles}
    cursor="pointer"
    onClick={() => window.open(href, '_blank')}
  >
    Reproduce in a{' '}
    <img style={{ transform: 'translateY(1px)' }} src={require('./icon.svg')} />{' '}
    Notebook
  </Surface>
)
