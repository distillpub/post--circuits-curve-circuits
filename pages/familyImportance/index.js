import { Surface, Text } from 'components/ui'
import Figure from 'components/figure'

import cofab from '../cofab'
import { featureVis } from 'components/helpers'

const gap = 15
const neuronSize = 220
const Header = ({ car, children }) => (
  <Surface
    flexFlow="row"
    alignItems="center"
    justifyContent="space-between"
    paddingX={3}
  >
    <Text fontWeight={500}>{children}</Text>
    {car && <Text fontWeight={400}>CAR {car}%</Text>}
  </Surface>
)

export default cofab(({ unedited, curves, lines, textures }) => (
  <Figure>
    <Surface alignSelf="center" width={neuronSize * 4 + gap * 3}>
      <h2 style={{ marginLeft: 30 }}>
        Visualizing Individual Family Connections
      </h2>
      <Surface
        flexFlow="row"
        paddingBottom={3}
        width={neuronSize * 4 + gap * 3}
      >
        <Surface
          width={neuronSize}
          borderBottom="1px solid rgba(0, 0, 0, 0.2)"
          marginRight={gap}
          paddingX={3}
        >
          <Text fontWeight={600}>Unedited Model</Text>
        </Surface>
        <Surface
          width={neuronSize * 3 + 10 * 2}
          borderBottom="1px solid rgba(0, 0, 0, 0.2)"
          paddingBottom={3}
          paddingX={3}
        >
          <Text fontWeight={600}>Edited Models</Text>
        </Surface>
      </Surface>
      <Surface
        marginTop={10}
        display="grid"
        gridTemplateColumns="repeat(4, auto)"
        gridTemplateRows={'10px auto auto 60px'}
        gridGap={gap}
      >
        <Header>Unedited</Header>
        <Header car={curves.reconstruction}>Curves Only</Header>
        <Header car={lines.reconstruction}>Lines Only</Header>
        <Header car={textures.reconstruction}>Textures Only</Header>

        <img width={neuronSize} src={unedited.featureVis} />
        <img width={neuronSize} src={curves.featureVis} />
        <img width={neuronSize} src={lines.featureVis} />
        <img width={neuronSize} src={textures.featureVis} />

        <figcaption>The original model</figcaption>
        <figcaption>Well defiend curve, little texture.</figcaption>
        <figcaption>Poorly defined curve, little texture.</figcaption>
        <figcaption>Poorly defined curve, textured.</figcaption>
      </Surface>
    </Surface>
  </Figure>
))
