import React from 'react'
import { Surface, Text } from 'components/ui'
import { featureVis } from 'components/helpers'
import img1 from './img1.png'
import img2 from './img2.png'
import artificial1 from './artificial1.png'
import artificial2 from './artificial2.png'
import natural1 from './natural1.png'
import natural2 from './natural2.png'

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
        src={img1}
        style={{ gridRow: 'img 1', gridCol: 'img' }}
      />
      <Img
        width={size}
        src={img2}
        style={{ gridRow: 'img 2', gridCol: 'img' }}
      />
      <Img
        width={size}
        src={artificial1}
        style={{ gridRow: 'img 1', gridCol: 'artificial' }}
      />
      <Img
        width={size}
        src={artificial2}
        style={{ gridRow: 'img 2', gridCol: 'artificial' }}
      />
      <Img
        width={size}
        src={natural1}
        style={{ gridRow: 'img 1', gridCol: 'natural' }}
      />
      <Img
        width={size}
        src={natural2}
        style={{ gridRow: 'img 2', gridCol: 'natural' }}
      />
    </Surface>
  </Surface>
)
