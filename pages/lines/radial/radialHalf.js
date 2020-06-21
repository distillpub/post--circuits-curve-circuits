import React from 'react'
import { lineRadial, curveNatural } from 'd3-shape'
import { Surface, Text } from 'components/ui'
import { max, debounce, flatten } from 'lodash'
import { featureVis } from 'components/helpers'

const toRadians = (deg) => deg * (Math.PI / 180)
const toDegrees = (radians) => radians * (180 / Math.PI)

const circularMean = (angles) => {
  let x = 0
  let y = 0

  angles.forEach(({ angle, weight }) => {
    x += Math.cos(toRadians(angle)) * weight
    y += Math.sin(toRadians(angle)) * weight
  })

  return toDegrees(Math.atan2(y, x))
}

export default class RadialTuningCurve extends React.Component {
  state = { activeNeuron: null }

  onHighlightNeuron = debounce(
    (activeNeuron) => {
      this.setState({ activeNeuron })
      if (this.props.onActivateNeuron) {
        this.props.onActivateNeuron(activeNeuron)
      }
    },
    130,
    true
  )

  render() {
    const { activeNeuron } = this.state

    const {
      layer,
      neurons,
      responsesByNeuron,
      fillOpacity = 0.85,
      neuronPadding = 5,
      size,
      model = 'inceptionv1',
      orientationType = 'max',
      neuronSize = 60,
    } = this.props

    const getOrientation = (neuron) => {
      const weights = responsesByNeuron[neuron]
      if (orientationType === 'max') {
        const val = weights.indexOf(max(weights)) / 2
        return val
      }

      const mean = circularMean(
        weights.map((weight, index) => ({
          angle: index / 2,
          weight,
        }))
      )

      return mean
    }

    const orientations = neurons.reduce(
      (acc, neuron) => ({ ...acc, [neuron]: getOrientation(neuron) }),
      {}
    )

    const maxValue = max(
      flatten(neurons.map((neuron) => responsesByNeuron[neuron]))
    )

    const radius = size / 3.5
    const innerCircleRadius = radius * 0.3

    const paths = neurons.map((neuron) => {
      /*
      const maxValueNeuron = Math.sqrt(
        sum(responsesByNeuron[neuron].map(x => x * x)),
      )
      */

      let line = responsesByNeuron[neuron].map((value, index) => [
        toRadians(index / 2) - Math.PI / 2,
        innerCircleRadius +
          Math.pow(value / (this.props.maxValue || maxValue), 1) * radius * 1,
      ])

      line = [...line, ...line.map(([val1, val2]) => [val1 + Math.PI, val2])]

      // close path
      line.push(line[0])

      const stroke = `hsl(${orientations[neuron]}, 96%, 30%)`
      const fill = `hsla(${orientations[neuron]}, 66%, 60%, ${fillOpacity})`

      return (
        <path
          key={neuron}
          d={lineRadial().curve(curveNatural)(line)}
          fill={fill}
          onMouseEnter={() => this.onHighlightNeuron(neuron)}
          onMouseLeave={() => this.onHighlightNeuron(null)}
          stroke={stroke}
          strokeWidth={1}
          transform={`translate(${size / 2},${size / 2})`}
          style={{
            opacity: activeNeuron ? (activeNeuron === neuron ? 1 : 0) : 1,
            transition: '700ms ease-out all',
          }}
        />
      )
    })

    const neuronRadius = size / 2

    return (
      <div
        key={1}
        style={{
          marginTop: 30,
          width: size,
          height: size,
          position: 'relative',
          borderRadius: size,
          border: '1px dashed rgba(0, 0, 0, 0.3)',
        }}
      >
        <svg
          key={1}
          width={size}
          height={size}
          style={{
            // padding: 0,
            // margin: 0,
            transform: 'scaleX(-1)',
            position: 'absolute',
            zIndex: 10,
            // top: -centerSize / 2,
          }}
        >
          {paths}
        </svg>
        <div
          style={{
            background: 'rgb(247,249,252)',
            border: '1px solid rgba(0, 0, 0, .5)',
            width: innerCircleRadius * 2,
            height: innerCircleRadius * 2,
            zIndex: 100,
            borderRadius: innerCircleRadius,
            position: 'absolute',
            left: size / 2 - innerCircleRadius,
            top: size / 2 - innerCircleRadius,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            borderBottom: '1px dashed rgba(0, 0, 0, 0.3)',
            height: 1,
            top: size / 2 - 1,
            zIndex: 5,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            borderRight: '1px dashed rgba(0, 0, 0, 0.3)',
            width: 1,
            left: size / 2 - 1,
            zIndex: 5,
          }}
        />
        {neurons.map((neuron) => {
          return (
            <Surface
              position="absolute"
              left={
                size / 2 +
                Math.cos(toRadians(orientations[neuron])) * neuronRadius -
                neuronSize / 2
              }
              top={
                size / 2 -
                Math.sin(toRadians(orientations[neuron])) * neuronRadius -
                neuronSize / 2
              }
              zIndex={10}
            >
              <img
                src={featureVis(model, layer, neuron)}
                width={neuronSize}
                onMouseEnter={() => this.onHighlightNeuron(neuron)}
                onMouseLeave={() => this.onHighlightNeuron(null)}
                style={{
                  borderRadius: neuronSize,
                  opacity: activeNeuron
                    ? activeNeuron === neuron
                      ? 1
                      : 0.2
                    : 1,
                  border: `3px solid ${`hsla(${orientations[neuron]}, 96%, 30%, 0.4)`}`,
                  transition: '700ms ease-out all',
                }}
              />
            </Surface>
          )
        })}
      </div>
    )
  }
}
