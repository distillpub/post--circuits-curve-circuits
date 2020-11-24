import React from 'react'
import { Surface, Text } from 'components/ui'
import { featureVis } from 'components/helpers'

const size = 180

const Img = (props) => {
  props.style.borderRadius = 5
  return <img {...props} />
}

export default () => (
  <Surface gridColumn="screen" alignItems="center" marginY={20}>
    <Surface
      display="grid"
      gridTemplateRows="[label] auto [img] auto [img] auto"
      gridGap={6}
      gridTemplateColumns="[img] auto [artificial] auto [natural] auto"
    >
      <figcaption style={{ gridColumn: 'img', gridRow: 'label' }}>
        Dataset Sample
      </figcaption>
      <figcaption style={{ gridColumn: 'artificial', gridRow: 'label' }}>
        Artificial Curve Detectors
      </figcaption>
      <figcaption style={{ gridColumn: 'natural', gridRow: 'label' }}>
        Natural Curve Detectors
      </figcaption>
      <Img
        width={size}
        src={require('./img1.png')}
        style={{ gridRow: 'img 1', gridCol: 'img' }}
      />
      <Img
        width={size}
        src={require('./img2.png')}
        style={{ gridRow: 'img 2', gridCol: 'img' }}
      />
      <Img
        width={size}
        src={require('./artificial1.png')}
        style={{ gridRow: 'img 1', gridCol: 'artificial' }}
      />
      <Img
        width={size}
        src={require('./artificial2.png')}
        style={{ gridRow: 'img 2', gridCol: 'artificial' }}
      />
      <Img
        width={size}
        src={require('./natural1.png')}
        style={{ gridRow: 'img 1', gridCol: 'natural' }}
      />
      <Img
        width={size}
        src={require('./natural2.png')}
        style={{ gridRow: 'img 2', gridCol: 'natural' }}
      />
    </Surface>
  </Surface>
)
