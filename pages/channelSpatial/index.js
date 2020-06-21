import { Surface, Text } from 'components/ui'
import cofab from 'pages/cofab'
import { VictoryChart, VictoryScatter } from 'victory'

const Point = ({ datum: { x, y, familyName, layer } }) => {
  return (
    <text x={x} y={y} fontSize={30}>
      {familyName} {layer}
    </text>
  )
}

const layerNames = ['conv2d2', 'mixed3a', 'mixed3b', 'mixed4a']
const palette = ['#fe938c', '#fa7921', '#4281a4', '#2ec4b6']

export default cofab(({ points }) => {
  return (
    <Surface>
      <Surface marginTop={20} flexFlow="row" marginLeft={300}>
        {layerNames.map((name, index) => (
          <Surface flexFlow="row" alignItems="center" marginX={10}>
            <Surface
              width={25}
              height={25}
              borderRadius={5}
              background={palette[index]}
              marginRight={5}
            />{' '}
            {name}
          </Surface>
        ))}
      </Surface>
      <Surface position="relative" marginTop={40} marginLeft={40}>
        {points.map(([x, y], index) => {
          const w = 1200
          const h = 600
          const [_a, _b, family, layer] = points[index]
          return (
            <Surface
              position={'absolute'}
              left={w * x}
              alignItems="center"
              top={h - h * y}
              flexFlow="row"
            >
              <Surface
                background={palette[layerNames.indexOf(layer)]}
                borderRadius={10}
                width={10}
                height={10}
                marginRight={5}
              />
              <Text fontSize={10} fontWeight={600}>
                {family.replace('mixed4a_', '')}
              </Text>
            </Surface>
          )
        })}
      </Surface>
    </Surface>
  )
})
