import React from 'react'
import { Surface, Text } from 'components/ui'

import Figure from 'components/figure'
import { range } from 'lodash'
import Tiles from 'components/tiles'
import { scaleLinear } from 'd3-scale'
import cofab from 'pages/cofab'

export const getInitialProps = () => {
  return {}
}

const AANNTiles = ({ upstream, downstream, weights, fvs_3a, fvs_3b }) => {
  const size = 25
  const scale = scaleLinear().domain([0, 1])

  return (
    <Surface gridColumn="screen" alignItems="center" marginY={20}>
      <Surface
        display="grid"
        overflow="hidden"
        gridGap={2}
        gridTemplateRows={`repeat(${downstream.length + 1}, auto)`}
        gridTemplateColumns={`repeat(${upstream.length + 1}, auto)`}
        borderRadius={5}
        background="#EAEAEA"
        border="1px solid rgba(0, 0, 0, 0.3)"
      >
        <Surface width={size} height={size} />
        {upstream.map((upstreamNeuron) => (
          <img width={size} src={fvs_3a[upstreamNeuron]} />
        ))}
        {downstream.map((downstreamNeuron) => (
          <React.Fragment>
            <Surface width={size} height={size}>
              <img width={size} src={fvs_3b[downstreamNeuron]} />
            </Surface>
            {upstream.map((upstreamNeuron) => (
              <Tiles
                size={size}
                grad={weights[upstreamNeuron][downstreamNeuron]}
                hasBorder={false}
                scale={scale}
              />
            ))}
          </React.Fragment>
        ))}
      </Surface>
    </Surface>
  )
}

const Header = ({ children }) => (
  <Text
    borderBottom="1px solid rgba(0, 0, 0, 0.1)"
    paddingBottom={3}
    paddingLeft={3}
    fontSize={18}
  >
    {children}
    <span style={{ marginLeft: 20, opacity: 0.6 }}>Artificial AANN</span>
  </Text>
)

export default cofab(({ weights, fvs_3a, fvs_3b }) => {
  console.log('weights are', weights.length)
  return (
    <Figure>
      <Surface alignSelf="center" flexFlow="row">
        <Surface marginX={5}>
          <Header>3a Early Curves → 3b Curves</Header>
          <AANNTiles
            fvs_3a={fvs_3a}
            fvs_3b={fvs_3b}
            weights={weights}
            upstream={range(24)}
            downstream={range(24)}
          />
        </Surface>
        <Surface marginX={5}>
          <Header>3a Lines → 3b Curves</Header>
          <AANNTiles
            fvs_3a={fvs_3a}
            fvs_3b={fvs_3b}
            weights={weights}
            upstream={range(25, 42)}
            downstream={range(24)}
          />
        </Surface>
      </Surface>
      <figcaption style={{ alignSelf: 'center', width: 704, marginTop: 5 }}>
        The weights of the artificial artificial neural network closely resemble
        the equivariant weight in the naturally trained network, except their
        pattern is cleaner because the weights are programmetically generated.
        equivariance.
      </figcaption>
    </Figure>
  )
})
