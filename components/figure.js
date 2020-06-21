import { Surface } from 'components/ui'

export default ({
  children,
  background = 'rgb(252, 252, 252)',
  fullWidth = false,
  margin = 20,
  banner = false,
}) => (
  <Surface
    gridColumn="screen"
    paddingTop={20}
    background={background}
    marginTop={40}
    marginBottom={banner ? 0 : 40}
    paddingBottom={banner ? 0 : 20}
    borderTop="1px solid rgba(0, 0, 0, 0.1)"
    borderBottom={!banner && `1px solid rgba(0, 0, 0, 0.1)`}
  >
    {children}
  </Surface>
)
