import React from 'react'
import { Surface, Text } from 'components/ui'
import { featureVis } from 'components/helpers'

export default () => (
  <div style={{ gridColumn: '12 / 14' }}>
    <img
      src={featureVis('inceptionv1', 'mixed3b', 379)}
      style={{ borderRadius: 5 }}
    />
    <figcaption>3b:379</figcaption>
  </div>
)
