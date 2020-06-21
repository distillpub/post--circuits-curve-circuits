import { Surface } from 'components/ui'
import React from 'react'
import { featureVis } from 'components/helpers'
import neuron1 from './neuron1.png'
import neuron2 from './neuron2.png'
import neuron3 from './neuron3.png'
import neuron4 from './neuron4.png'
import neuron5 from './neuron5.png'
import neuron6 from './neuron6.png'
import neuron7 from './neuron7.png'
import neuron8 from './neuron8.png'
import neuron9 from './neuron9.png'
import neuron10 from './neuron10.png'

const neurons = [379, 406, 385, 343, 342, 388, 324, 340, 330, 349]
const images = [
  neuron1,
  neuron2,
  neuron3,
  neuron4,
  neuron5,
  neuron6,
  neuron7,
  neuron8,
  neuron9,
  neuron10,
]

export default class extends React.Component {
  state = { active: 0 }
  render() {
    const { active } = this.state
    return (
      <Surface margin={30}>
        <Surface width={720} marginTop={20} marginBottom={5}>
          <img
            src={require('./legend.png')}
            width={220}
            style={{ alignSelf: 'flex-end' }}
          />
        </Surface>
        <img src={require('./curves.png')} width={720} height={80} />
        <Surface position="relative" width={720} height={80} background="black">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                opacity: index === active ? 1 : 0,
                transition: '200ms ease-in all',
              }}
            />
          ))}
        </Surface>

        <Surface
          flexFlow="row"
          paddingX={10}
          alignItems="center"
          marginTop={5}
          width={720}
          justifyContent="space-between"
        >
          {neurons.map((neuron, index) => (
            <img
              onMouseEnter={() => this.setState({ active: index })}
              style={{
                margin: 0,
                padding: 0,
                borderRadius: 5,
                opacity: index === active ? 1 : 0.4,
                transition: '200ms ease-in all',
              }}
              src={featureVis('inceptionv1', 'mixed3b', neuron)}
            />
          ))}
        </Surface>
      </Surface>
    )
  }
}
