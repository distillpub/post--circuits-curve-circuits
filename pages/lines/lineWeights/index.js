import React from 'react'
import { Surface } from 'components/ui'
import Tiles from 'components/tiles'
import { scaleLinear } from 'd3-scale'

import cofab from 'pages/cofab'
import { featureVis } from 'components/helpers'
import weights from 'components/weights'

export default cofab(
  class LineWeights extends React.Component {
    render() {
      const { tuningCurves } = this.props
      const earlyNeurons = [27, 187, 154, 57]
      const scale = scaleLinear().domain([0, 35])

      const size = 194
      const activeNeuron = 406
      const margin = 4

      return (
        <Surface
          gridColumn="screen"
          flexFlow="row"
          alignItems="center"
          justifyContent="center"
          marginBottom={20}
        >
          <Surface>
            <Surface flexFlow="row" flexWrap="wrap" marginRight={20}>
              <Surface flexFlow="row" margin={margin}>
                <img
                  width={size}
                  src={tuningCurves[activeNeuron]}
                  style={{
                    borderRadius: '5px 0px 0px 5px',
                  }}
                />
                <img
                  width={size}
                  src={featureVis('InceptionV1', 'mixed3b', activeNeuron)}
                  style={{
                    borderRadius: '0px 5px 5px 0px',
                  }}
                />
              </Surface>
            </Surface>
            <figcaption style={{ width: 400, paddingLeft: 10 }}>
              3b:406 looks for slightly upward tilted lines on the left and
              slightly downward tilted lines on the right.
            </figcaption>
          </Surface>
          <Surface>
            <Surface flexFlow="row" width={400} flexWrap="wrap">
              {earlyNeurons.map((neuron) => (
                <Surface
                  flexFlow="row"
                  overflow="hidden"
                  borderRadius={5}
                  margin={5}
                  padding={0}
                  border="1px solid rgba(0, 0, 0, 0.2)"
                >
                  <img
                    width={90}
                    src={featureVis('InceptionV1', 'mixed3a', neuron)}
                  />
                  <Tiles
                    scale={scale}
                    size={90}
                    grad={weights[neuron][activeNeuron]}
                    hasBorder={false}
                  />
                </Surface>
              ))}
            </Surface>
            <figcaption style={{ width: 400, paddingLeft: 10 }}>
              Upwards and downwards tilted lines are relatively similar in
              orientation but have opposite weights.
            </figcaption>
          </Surface>
        </Surface>
      )
    }
  }
)
