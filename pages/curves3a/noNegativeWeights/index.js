import { Surface, Text } from 'components/ui'
import Figure from 'components/figure'
import Radial from './radial'
import onlyCurvesNoNegative from './only-curves-no-negative.json'
import unedited from './unedited.json'
import noNegative from './no-negative.json'

const Header = ({ ...props }) => (
  <Text
    width={'100%'}
    fontSize={18}
    marginBottom={10}
    paddingBottom={3}
    borderBottom="1px solid rgba(0, 0, 0, 0.2)"
    paddingLeft={3}
    fontWeight={500}
    {...props}
  />
)

const size = 300
const activeLayer = unedited.filter(({ layer }) => layer === 'mixed3b')[0]

const Caption = ({ children }) => (
  <Surface height={50}>
    <figcaption>{children}</figcaption>
  </Surface>
)

const orientations = {
  324: 91.5,
  330: 145,
  340: 110,
  342: 22.5,
  343: 358,
  349: 181,
  379: 243,
  385: 290,
  388: 66.5,
  406: 268.5,
}

export default () => (
  <Figure>
    <Surface alignItems="center" gridColumn="screen" marginY={10}>
      <Surface flexFlow="row" justifyContent="space-between">
        <Surface width={size} marginX={20}>
          <Header>Unedited Model</Header>
          <Caption>
            Each curve responds sharply to a range of orientations and does not
            have echoes
          </Caption>
          <Surface marginY={10} transform="translate(20px)">
            <Radial
              {...activeLayer}
              orientations={orientations}
              name="first"
              size={size - 40}
              neuronSize={50}
              fillOpacity={0.4}
              orientationType={'max'}
            />
          </Surface>
        </Surface>

        <Surface width={size} marginX={20}>
          <Header>Early Curves Only</Header>
          <Caption>
            Responses are lower resolution than the original model but do not
            have echoes
          </Caption>
          <Surface marginY={10} transform="translate(20px)">
            <Radial
              {...noNegative}
              orientations={orientations}
              size={size - 40}
              neuronSize={50}
              fillOpacity={0.4}
              orientationType={'max'}
            />
          </Surface>
        </Surface>

        <Surface width={size} marginX={20}>
          <Header>Early Curves, Positive Weights</Header>
          <Caption>Responses are low resolution and have echoes</Caption>
          <Surface marginY={10} transform="translate(20px)">
            <Radial
              {...onlyCurvesNoNegative}
              orientations={orientations}
              size={size - 40}
              neuronSize={50}
              fillOpacity={0.4}
              orientationType={'max'}
            />
          </Surface>
        </Surface>
      </Surface>
    </Surface>
    <figcaption style={{ alignSelf: 'center', width: 704, marginTop: 10 }}>
      The curve family of 3b uses negative weights to avoid the problem of
      echoes. By removing these negative weights with circuit editing we see
      echoes reappear.
    </figcaption>
  </Figure>
)
