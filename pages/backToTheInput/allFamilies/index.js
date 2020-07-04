import cofab from 'pages/cofab'
import ReactDOM from 'react-dom'
import { featureVis } from 'components/helpers'
import { Surface, Text } from 'components/ui'
import { range, groupBy, sortBy, includes } from 'lodash'
import FigmaSource from './figmaSource'

import {
  max,
  line,
  curveBasis,
  curveBundle,
  scaleLinear,
  scaleBand,
  nest,
} from 'd3'

const layerNames = [
  'conv2d0',
  'conv2d1',
  'conv2d2',
  'mixed3a',
  'mixed3b',
  'mixed4a',
]

const colors = {
  texture: '#457b9d', // '#95e1d3',
  contrast: '#02c39a',
  shape: '#e63946',
  none: '#888',
}

const maxStrokeWidth = 10

const familyWidth = 180
const familyHeight = 44
const Family = ({ layerIndex, name, units }) => (
  <Surface
    id={layerNames[layerIndex] + '-' + name.replace(/ /g, '_')}
    height={familyHeight}
    borderRadius={5}
    justifyContent="space-between"
    marginY={3}
    transform="translateY(-5px)"
    border={`1px solid rgba(0, 0, 0, 0.2)`}
    padding={5}
    paddingX={10}
    borderRadius={3}
    background="white"
    width={familyWidth}
    height={familyHeight}
    onMouseLeave={() => {
      // this.setState({ activeFamily: null })
    }}
    onMouseEnter={() => {
      return
      this.setState({
        activeFamily: { layerIndex, name },
      })
    }}
    cursor="pointer"
    onClick={() => {
      const url = `https://distill.pub/2020/circuits/early-vision/#group_${
        layerNames[layerIndex]
      }_${name.toLowerCase().replace(/\ /g, '_')}`
      window.open(url, '_blank')
    }}
    flexFlow="row"
    alignItems="center"
  >
    <Surface flexFlow="row" alignItems="center">
      <Surface position="relative" width={32} height={32}>
        {range(Math.min(3, units.length)).map((i) => (
          <img
            width={28}
            src={featureVis('inceptionv1', layerNames[layerIndex], units[i])}
            style={{
              borderRadius: 3,
              border: '1px solid rgba(0, 0, 0, 0.7)',
              zIndex: 10 - i,
              opacity: i === 0 ? 1 : 0.3,
              position: 'absolute',
              left: i * 2,
              top: i * 2,
            }}
          />
        ))}
      </Surface>
      <Text
        fontSize={name.length > 12 ? 13 : 15}
        marginLeft={5}
        fontWeight={600}
      >
        {name.slice(0, 15)}
      </Text>
    </Surface>
    <Text opacity={0.6} marginLeft={3}>
      {units.length}
    </Text>
  </Surface>
)

const FamilyName = ({ layerFamilies, layer, children }) => {
  const name = children.toString()
  const layerIndex = layerNames.indexOf(layer)
  const hits = layerFamilies[layerIndex].filter(
    (f) =>
      f.name.toLowerCase() === name.toLowerCase() ||
      f.name.toLowerCase() ===
        'mixed4a_' + name.toLowerCase().replace(/ /g, '_')
  )
  if (hits.length === 0)
    return (
      <Text>
        family {layer} {name} not found
      </Text>
    )
  return <Family layerIndex={layerIndex} {...hits[0]} />
}

export default cofab(
  class AllFamilies extends React.Component {
    state = {
      paths: null,
      connectionsVar: 'connectionsPerNeuron',
      // connectionsVar: 'connections',
      activeFamily: null,
      activeColor: null,
    }

    onDrawPaths = () => {
      if (typeof window === 'undefined') return

      const { activeFamily, activeColor, connectionsVar } = this.state
      const { layerFamilies } = this.props

      let connections
      if (connectionsVar === 'diff') {
        connections = {}
        window.connectionsMax = max(Object.values(this.props.connections))
        window.connectionsPerNeuronMax = max(
          Object.values(this.props.connectionsPerNeuron)
        )
        Object.keys(this.props.connections).map((id) => {
          connections[id] = Math.abs(
            this.props.connections[id] / connectionsMax -
              this.props.connectionsPerNeuron[id] / connectionsPerNeuronMax
          )
        })
        window.connectionsDiff = connections
        window.connectionsBase = this.props.connections
        window.connectionsPerNeuron = this.props.connectionsPerNeuron
      } else {
        connections = this.props[connectionsVar]
      }

      const familyEls = Array.from(
        document.querySelectorAll('#circuit-container rect')
      )

      const families = familyEls
        .map((el) => {
          const id = el.getAttribute('id')

          if (id.indexOf(':') === -1) return null
          const x = +el.getAttribute('x') + 5 // add padding
          const y = +el.getAttribute('y')
          const [layer, name] = id.split(':')

          el.remove()

          return {
            layer,
            name,
            layerIndex: layerNames.indexOf(layer),
            x,
            y,
          }
        })
        .filter((i) => i !== null)

      const getConnection = (a, b) => {
        const key = `${a.layer}-${a.name.toLowerCase()}-${
          b.layer
        }-${b.name.toLowerCase()}`

        return +connections[key]
      }

      const textures = [
        'multicolor',
        'texture',
        'gabor textures',
        'gabor filters',
        'gabor like',
        'complex gabor',
      ]

      const contrast = [
        'color contrast',
        'color center-surround',
        'high-low frequency',
        'brightness gradient',
        'bw vs color',
        'boundary',
        'color contrast/gradient',
        'texture contrast',
        'double boundary',
        'boundary misc',
        'mixed4a_high-low',
        'mixed4a_any_boundary',
        'complex center-surround',
      ]

      const shapes = [
        'angles',
        'low frequency',
        'line',
        'shifted line',
        'tiny curves',
        'curves',
        'lines',
        'line misc.',
      ]

      const getColor = (fromName) => {
        return 'none'
        if (includes(textures, fromName.toLowerCase())) return 'texture' //
        if (includes(contrast, fromName.toLowerCase())) return 'contrast' //
        if (includes(shapes, fromName.toLowerCase())) return 'shape' //
        return 'none'
      }

      const getLinks = () => {
        // generate the links for the hidden layers and logits
        const toBlock = ({ layer, layerIndex, i, j, x, y, name }) => {
          return {
            i,
            j,
            layerIndex,
            layer,
            name,
            x,
            y,
            w: familyWidth,
            h: familyHeight,
          }
        }

        const links = []
        const byLayer = groupBy(families, 'layer')
        const ySort = {}

        Object.keys(byLayer).forEach((layer) => {
          ySort[layer] = sortBy(byLayer[layer], 'y').map(({ name }) => name)
        })

        console.log('families are', families)

        families.map((familyA) => {
          families.map((familyB) => {
            if (familyB.layerIndex - familyA.layerIndex !== 1) return null

            const attr = getConnection(familyA, familyB)

            const j = ySort[familyA.layer].indexOf(familyA.name)
            const link = {
              i: familyB.layerIndex,
              j,
              color: getColor(familyA.name),
              source: toBlock(familyA),
              target: toBlock(familyB),
              attr,
            }

            if (!link.source || !link.target) return

            const isFamilyActive = (block) =>
              !activeFamily ||
              (block.source.layerIndex === activeFamily.layerIndex &&
                block.name === activeFamily.name)

            const isColorActive = ({ color }) =>
              !activeColor || activeColor === color

            /*if (
              (isFamilyActive(link.source) || isFamilyActive(link.target)) &&
              isColorActive(link)
            )*/
            links.push(link)
          })
        })

        const path = line()
          .x(({ x }) => x)
          .y(({ y }) => y)
          .curve(curveBundle.beta(0.9))

        const lines = []

        nest()
          .key(({ target }) => target.layer)
          .rollup((leaves) => leaves)
          .entries(links)
          .forEach(({ key, value }) => {
            const targetLinks = value

            const maxAttr = max(targetLinks, ({ attr }) => attr)
            console.log('key is', key, 'val is', value)

            const weightScale = scaleLinear()
              .domain([0, maxAttr])
              .range([0, maxStrokeWidth])

            const maxI = max(targetLinks, ({ i }) => i)
            const maxJ = max(targetLinks, ({ j }) => j)

            targetLinks.forEach((link) => {
              const syscale = scaleBand()
                .domain(range(maxI + 1))
                .range([2, link.source.h - 2])
                .padding(0.3)
              const tyscale = scaleBand()
                .domain(range(maxJ + 1))
                .range([2, link.target.h - 2])
                .padding(0.3)

              const sx = link.source.x + link.source.w
              const sy = link.source.y + syscale(link.i)

              const tx = link.target.x
              const ty = link.target.y + tyscale(link.j)

              const dx = tx - sx
              const points = [
                { x: sx, y: sy },
                { x: sx + dx / 4, y: sy },
                { x: tx - dx / 4, y: ty },
                { x: tx, y: ty },
              ]

              let weight = weightScale(Math.abs(link.attr))

              lines.push({
                link,
                weight,
                opacity: 1,
                path: path(points),
              })
            })
          })

        return lines
      }

      const links = getLinks()

      ReactDOM.render(
        <Surface>
          {families.map(({ name, layer, x, y }) => (
            <Surface left={x} top={y} position="absolute">
              <FamilyName layerFamilies={layerFamilies} layer={layer}>
                {name}
              </FamilyName>
            </Surface>
          ))}
          <svg
            style={{
              position: 'absolute',
              zIndex: -1,
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              //width: 1400,
              // height: 300,
              width: 5400,
              height: 5300,
            }}
          >
            {links.map(({ sign, path, weight, link: { color } }) => {
              if (activeColor && color !== activeColor) return null

              return (
                <path
                  classname={sign}
                  d={path}
                  strokeWidth={Math.pow(weight / 3, 2)}
                  // strokeWidth={3}
                  opacity={Math.pow(weight / maxStrokeWidth, 2)}
                  stroke={colors[color]}
                  fill="none"
                />
              )
            })}
          </svg>
        </Surface>,
        document.getElementById('svgHolder')
      )
    }
    componentDidMount() {
      this.onDrawPaths()
    }

    componentDidUpdate() {
      this.onDrawPaths()
    }

    render() {
      const { activeColor } = this.state

      const Button = ({ color, children }) => (
        <Surface
          flexFlow="row"
          onClick={() => this.setState({ activeColor: color })}
          opacity={activeColor === color ? 1 : 0.5}
          transition="all 300ms ease-out"
          padding={3}
          alignItems="center"
          marginRight={10}
          marginY={10}
          paddingX={10}
          cursor="pointer"
          paddingY={2}
          border={`1px solid rgba(0, 0, 0, ${
            activeColor === color ? 0.5 : 0.2
          })`}
          borderRadius={5}
        >
          {color && (
            <Surface
              height={20}
              width={20}
              borderRadius={3}
              border="1px solid rgba(0, 0, 0, .6)"
              background={colors[color]}
              marginRight={8}
            />
          )}
          <Text>{children}</Text>
        </Surface>
      )

      return (
        <Surface margin={10} key={Math.random()}>
          <Surface id="circuit-container">
            <Surface position="relative" id="svgHolder" />
            <FigmaSource />
          </Surface>
        </Surface>
      )
    }
  }
)

/*
<Surface flexFlow="row">
  <Surface>
    <Layer>conv2d0</Layer>
    <Metafamily name="Texture">
      <FamilyName layer="conv2d0">Gabor Filters</FamilyName>
    </Metafamily>
    <Metafamily name="Contrast">
      <FamilyName layer="conv2d0">Color Contrast</FamilyName>
    </Metafamily>
  </Surface>
  <Surface marginX={40}>
    <Layer>conv2d1</Layer>
    <Metafamily name="Texture">
      <FamilyName layer="conv2d1">Color</FamilyName>
      <FamilyName layer="conv2d1">Multicolor</FamilyName>
      <FamilyName layer="conv2d1">Gabor Like</FamilyName>
      <FamilyName layer="conv2d1">Hatch</FamilyName>
      <FamilyName layer="conv2d1">Complex Gabor</FamilyName>
      <FamilyName layer="conv2d1">Low Frequency</FamilyName>
    </Metafamily>
    <Metafamily name="Contrast">
      <FamilyName layer="conv2d1">Color Contrast</FamilyName>
    </Metafamily>
  </Surface>
  <Surface marginX={40}>
    <Layer>conv2d2</Layer>
    <Metafamily name="Texture">
      <FamilyName layer="conv2d2">Textures</FamilyName>
      <FamilyName layer="conv2d2">Texture Contrast</FamilyName>
      <FamilyName layer="conv2d2">Hatch Textures</FamilyName>
      <FamilyName layer="conv2d2">Gabor Textures</FamilyName>
      <FamilyName layer="conv2d2">Color/Multicolor</FamilyName>
    </Metafamily>
    <Metafamily name="Contrast">
      <FamilyName layer="conv2d2">Color Contrast</FamilyName>
      <FamilyName layer="conv2d2">Color Center-Surround</FamilyName>
    </Metafamily>
    <Surface marginBottom={100} width={1} />
    <Metafamily name="Shapes">
      <FamilyName layer="conv2d2">Tiny Curves</FamilyName>
      <FamilyName layer="conv2d2">Corners</FamilyName>
      <FamilyName layer="conv2d2">Line Divergence</FamilyName>
      <FamilyName layer="conv2d2">Line</FamilyName>
      <FamilyName layer="conv2d2">Shifted Line</FamilyName>
    </Metafamily>
  </Surface>
  <Surface marginX={40}>
    <Layer>3a</Layer>
    <Metafamily name="Texture">
      <FamilyName layer="mixed3a">Texture</FamilyName>
      <FamilyName layer="mixed3a">Repeating patterns</FamilyName>
    </Metafamily>
    <Surface marginBottom={40} width={1} />
    <Metafamily name="Contrast">
      <FamilyName layer="mixed3a">High-Low Frequency</FamilyName>
      <FamilyName layer="mixed3a">Brightness Gradient</FamilyName>
      <FamilyName layer="mixed3a">Color Contrast</FamilyName>
      <FamilyName layer="mixed3a">Color Center-Surround</FamilyName>
      <FamilyName layer="mixed3a">
        Complex Center-Surround
      </FamilyName>
      <FamilyName layer="mixed3a">BW vs Color</FamilyName>
    </Metafamily>
    <Metafamily name="Shapes">
      <FamilyName layer="mixed3a">Lines</FamilyName>
      <FamilyName layer="mixed3a">Line Misc.</FamilyName>
      <FamilyName layer="mixed3a">
        Crosses / Diverging Lines
      </FamilyName>
      <FamilyName layer="mixed3a">Angles</FamilyName>
      <FamilyName layer="mixed3a">Curves</FamilyName>
    </Metafamily>
    <Metafamily name="Objects">
      <FamilyName layer="mixed3a">Fur Precursors</FamilyName>
      <FamilyName layer="mixed3a">Eyes / Small Circles</FamilyName>
    </Metafamily>
  </Surface>
  <Surface marginX={40}>
    <Layer>3b</Layer>
    <Metafamily name="Texture">
      <FamilyName layer="mixed3b">Texture</FamilyName>
      <FamilyName layer="mixed3b">Pattern</FamilyName>
      {false && <FamilyName layer="mixed3b">Shiny</FamilyName>}
      <FamilyName layer="mixed3b">Scales</FamilyName>
      {false && (
        <FamilyName layer="mixed3b">Circle Cluster</FamilyName>
      )}
    </Metafamily>
    <Metafamily name="Contrast">
      <FamilyName layer="mixed3b">Color Center-Surround</FamilyName>
      <FamilyName layer="mixed3b">
        Complex Center-Surround
      </FamilyName>
      <FamilyName layer="mixed3b">
        Color Contrast/Gradient
      </FamilyName>
      <FamilyName layer="mixed3b">Texture Contrast</FamilyName>
      <FamilyName layer="mixed3b">Double Boundary</FamilyName>
      <FamilyName layer="mixed3b">Boundary Misc</FamilyName>
    </Metafamily>
    <Metafamily name="Shapes">
      <FamilyName layer="mixed3b">Boundary</FamilyName>
      <FamilyName layer="mixed3b">Bumps</FamilyName>
      <FamilyName layer="mixed3b">Curves</FamilyName>
      <FamilyName layer="mixed3b">Lines</FamilyName>
      <FamilyName layer="mixed3b">Divots</FamilyName>
      <FamilyName layer="mixed3b">Square / Grid</FamilyName>
      <FamilyName layer="mixed3b">Line Grad</FamilyName>
      {false && <FamilyName layer="mixed3b">Pointy</FamilyName>}
      {false && (
        <FamilyName layer="mixed3b">Curves Misc.</FamilyName>
      )}
      <FamilyName layer="mixed3b">Star</FamilyName>
      <FamilyName layer="mixed3b">Shallow Curves</FamilyName>
      <FamilyName layer="mixed3b">Circles / Loops</FamilyName>
      <FamilyName layer="mixed3b">Curve Shapes</FamilyName>
      {false && (
        <FamilyName layer="mixed3b">Double Curves</FamilyName>
      )}
      {false && <FamilyName layer="mixed3b">Evolute</FamilyName>}
      {false && (
        <FamilyName layer="mixed3b">
          Cross / Corner Divergence
        </FamilyName>
      )}
    </Metafamily>
    {false && (
      <Metafamily name="Objects">
        <FamilyName layer="mixed3b">Proto-Head</FamilyName>
        {false && <FamilyName layer="mixed3b">Eyes</FamilyName>}
        <FamilyName layer="mixed3b">
          Generic, Oriented Fur
        </FamilyName>
      </Metafamily>
    )}
  </Surface>
  <Surface marginX={40}>
    <Layer>4a</Layer>
    <Surface marginBottom={210} width={1} />
    <Metafamily name="Constrast">
      <FamilyName layer="mixed4a">High Low 2</FamilyName>
    </Metafamily>
    <Surface marginBottom={220} width={1} />
    <Metafamily name="Shapes">
      <FamilyName layer="mixed4a">Any Boundary</FamilyName>
      <FamilyName layer="mixed4a">Circles</FamilyName>
      <FamilyName layer="mixed4a">Curves</FamilyName>
      <FamilyName layer="mixed4a">Divot</FamilyName>
      <FamilyName layer="mixed4a">Complex or 3d Shapes</FamilyName>
    </Metafamily>
    <Metafamily name="Objects">
      <FamilyName layer="mixed4a">Head Part</FamilyName>
      <FamilyName layer="mixed4a">Oriented Dog Heads</FamilyName>
      <FamilyName layer="mixed4a">Body Posture</FamilyName>
      <FamilyName layer="mixed4a">Humans</FamilyName>
      <FamilyName layer="mixed4a">Car</FamilyName>
    </Metafamily>
  </Surface>
</Surface>
*/
