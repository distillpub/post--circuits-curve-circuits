import cofab from 'pages/cofab'
import { Surface, Text } from 'components/ui'
import { featureVis } from 'components/helpers'

const factorSize = 703 / 9
const neuronSize = 703 / 13
export default cofab(
  class Texture extends React.Component {
    state = { direction: null }

    render() {
      const { grid, neurons, directionImages, directions } = this.props
      const { direction } = this.state

      return (
        <Surface width={703} marginY={20}>
          <Text
            marginLeft={3}
            width={'100%'}
            paddingBottom={3}
            marginBottom={10}
            borderBottom="1px solid rgba(0, 0, 0, 0.2)"
          >
            Texture Neurons (65)
          </Text>
          <Surface
            position="relative"
            width={13 * neuronSize}
            height={5 * neuronSize}
          >
            {grid[0].map(([x, y], neuronIndex) => (
              <img
                style={{
                  position: 'absolute',
                  left: neuronSize * x,
                  top: neuronSize * y,
                  opacity: direction ? direction[neurons[neuronIndex]] : 1,
                  transition: '200ms ease-out all',
                }}
                width={neuronSize}
                src={featureVis('inceptionv1', 'mixed3a', neurons[neuronIndex])}
              />
            ))}
          </Surface>
          <Text
            marginTop={20}
            marginLeft={3}
            width={'100%'}
            marginBottom={10}
            paddingBottom={3}
            borderBottom="1px solid rgba(0, 0, 0, 0.2)"
          >
            Texture Factors (9)
          </Text>
          <Surface flexFlow="row">
            {directionImages.map(([direction, attr], directionIndex) => (
              <Surface
                onClick={() => {
                  this.setState({ direction: directions[directionIndex] })
                }}
              >
                <img width={factorSize} src={direction} />
                <img width={factorSize} src={attr} />
              </Surface>
            ))}
          </Surface>
        </Surface>
      )
    }
  }
)
