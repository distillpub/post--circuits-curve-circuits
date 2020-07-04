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

export default () => (
  <Figure>
    <Surface alignItems="center" gridColumn="screen" marginY={10}>
      <Surface flexFlow="row" justifyContent="space-between">
        <Surface width={size} marginX={20}>
          <Header>Unedited Model</Header>
          <Surface marginY={10} transform="translate(20px)">
            <Radial
              {...activeLayer}
              size={size - 40}
              neuronSize={50}
              fillOpacity={0.4}
              orientationType={'max'}
            />
          </Surface>
          <figcaption>
            Each curve responds sharply to a range of orientations and does not
            have echoes
          </figcaption>
        </Surface>

        <Surface width={size} marginX={20}>
          <Header>Early Curves</Header>
          <Surface marginY={10} transform="translate(20px)">
            <Radial
              {...noNegative}
              size={size - 40}
              neuronSize={50}
              fillOpacity={0.4}
              orientationType={'max'}
            />
          </Surface>
          <figcaption>
            Responses are lower resolution than the original model but do not
            have echoes
          </figcaption>
        </Surface>

        <Surface width={size} marginX={20}>
          <Header>Early Curves, Positive Weights</Header>
          <Surface marginY={10} transform="translate(20px)">
            <Radial
              {...onlyCurvesNoNegative}
              size={size - 40}
              neuronSize={50}
              fillOpacity={0.4}
              orientationType={'max'}
            />
          </Surface>
          <figcaption>Responses are low resolution and have echoes</figcaption>
        </Surface>
      </Surface>
    </Surface>
  </Figure>
)
