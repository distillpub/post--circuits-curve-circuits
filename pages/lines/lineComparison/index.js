import { Surface, ZoomedImg } from 'components/ui'
import cofab from 'pages/cofab'
import { featureVis } from 'components/helpers'

const size = 100
const margin = 4
export default cofab(({ tuningCurves }) => (
  <Surface gridColumn="screen" alignItems="center" marginY={20}>
    <Surface flexFlow="row" flexWrap="wrap" width={1040}>
      {Object.keys(tuningCurves).map((curve) => (
        <Surface flexFlow="row" margin={margin}>
          <img
            width={size}
            src={tuningCurves[curve]}
            style={{
              borderRadius: '5px 0px 0px 5px',
            }}
          />
          <img
            width={size}
            src={featureVis('inceptionv1', 'mixed3b', curve)}
            style={{
              borderRadius: '0px 5px 5px 0px',
            }}
          />
        </Surface>
      ))}
    </Surface>
    <figcaption>
      Measuring responses to synthetic edge stimuli to see where curves are
      looking for edges.
    </figcaption>
  </Surface>
))
