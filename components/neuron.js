import React from 'react'
import { Surface, Text, ZoomedImg } from 'components/ui'
import { featureVis } from 'components/helpers'

export default ({ model = 'inceptionv1', layer, neuron }) => {
  if (typeof window === 'undefined') return null

  const layerText = layer.replace(/mixed/g, '')

  const url = `https://microscope.openai.com/models/${model}/${layer}_0/${neuron}`

  return (
    <a
      cursor="pointer"
      href={url}
      style={{
        borderBottom: 'none',
        height: 21,
      }}
    >
      <img
        style={{
          opacity: 0.7,
          transform: 'translateY(5px)',
          display: 'inline-block',
          borderRadius: 5,
        }}
        width={21}
        src={featureVis(model, layer, neuron)}
      />
      <span
        style={{
          marginLeft: 3,
          fontSize: 16,
          lineHeight: '28.8px',
          color: 'rgba(0, 0, 0, 0.8)',
        }}
      >
        {layerText}:{neuron}
      </span>
    </a>
  )
}
