import React from 'react'
import { Text, Surface } from 'components/ui'
import Figure from 'components/figure'
import cofab from 'pages/cofab'

const layers = ['conv2d0', 'conv2d1', 'conv2d2', '3a']

const size = 300

export default cofab((data) => (
  <Figure>
    <Surface flexFlow="row" alignItems="center" alignSelf="center">
      {layers.map((layer) => (
        <Surface marginX={10}>
          <Text
            borderBottom="1px solid rgba(0, 0, 0, 0.1)"
            paddingBottom={-3}
            fontWeight={600}
            fontSize={14}
            paddingLeft={3}
            marginBottom={10}
          >
            {layer}
          </Text>
          <img src={data[layer]} width={size} height={size} />
        </Surface>
      ))}
    </Surface>
  </Figure>
))
