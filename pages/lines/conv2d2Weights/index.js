import React from 'react'
import { Surface } from 'components/ui'

import fetchGradients from 'components/fetchGradients'
import { featureVis } from 'components/helpers'
import { Spinner } from 'evergreen-ui'
import Tiles from 'components/tiles'
import { scaleLinear } from 'd3-scale'

class LineTiles extends React.Component {
  state = { weights: null }

  componentWillMount() {
    const { upstreamLayer = 'conv2d2', layer = 'mixed3b' } = this.props
    fetchGradients('inceptionv1', upstreamLayer, layer).then((weights) => {
      this.setState({ weights })
    })
  }

  render() {
    const { weights } = this.state
    const { size = 60, upstream, neurons, noBorder } = this.props
    const { upstreamLayer = 'conv2d2', layer = 'mixed3b' } = this.props
    const scale = scaleLinear().domain([0, 38])

    if (!weights) {
      return <Spinner />
    }

    // curves
    // const upstream = [189, 81, 104, 92, 145, 95, 171, 71, 147]
    // edges
    // const upstream = [154, 57, 69, 146, 101, 187, 27, 150]
    // angles
    // const upstream = [149, 116, 176, 133, 77, 100]
    // angles and edges

    // good view for edges
    // const upstream = [187, 27, 154, 57, 133]
    // const neurons = [406, 324, 379, 388, 385, 340]

    // const neurons = [406, 385, 343, 342, 388, 324, 340, 330, 349, 379]
    // took out 330, 342

    // const upstream = [149, 116, 176, 77, 100]
    // const neurons = [406, 385, 343, 388, 324, 340, 330, 349, 379]

    return (
      <Surface
        display="grid"
        overflow="hidden"
        gridGap={2}
        gridTemplateRows={`repeat(${neurons.length + 1}, auto)`}
        gridTemplateColumns={`repeat(${upstream.length + 1}, auto)`}
        borderRadius={noBorder ? 0 : 5}
        background="#EAEAEA"
        border="1px solid rgba(0, 0, 0, 0.3)"
      >
        <Surface width={size} height={size} />
        {upstream.map((upstreamNeuron) => (
          <img
            width={size}
            src={featureVis('InceptionV1', upstreamLayer, upstreamNeuron)}
          />
        ))}
        {neurons.map((neuron) => (
          <React.Fragment>
            <Surface width={size} height={size}>
              <img
                width={size}
                src={featureVis('InceptionV1', layer, neuron)}
              />
            </Surface>
            {upstream.map((upstreamNeuron) => (
              <Tiles
                size={size}
                grad={weights[upstreamNeuron][neuron]}
                hasBorder={false}
                scale={scale}
              />
            ))}
          </React.Fragment>
        ))}
      </Surface>
    )
  }
}

export default () => (
  <Surface gridColumn="screen" alignItems="center" marginY={20}>
    <Surface marginLeft={-25}>
      <LineTiles
        size={35}
        upstream={[
          107,
          31,
          9,
          112,
          133,
          103,
          97,
          125,
          20,
          33,
          113,
          185,
          150,
          166,
          157,
          57,
          145,
          48,
          55,
          15,
          152,
          11,
          141,
          174,
          44,
          170,
          27,
          100,
          30,
          82,
          65,
          3,
          108,
        ]}
        neurons={[406, 385, 343, 342, 388, 324, 340, 330, 349, 379]}
      />
    </Surface>
    <figcaption style={{ alignSelf: 'center', width: 704, marginTop: 5 }}>
      The weights connecting conv2d2 lines and 3b curves implement rotational
      equivariance.
    </figcaption>
  </Surface>
)
