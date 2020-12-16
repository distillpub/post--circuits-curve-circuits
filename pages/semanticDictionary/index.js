import React from 'react'
import { Text, Surface } from 'components/ui'
import Figure from 'components/figure'
import { featureVis } from 'components/helpers'
import conv2d0 from './conv2d0.jpg'
import conv2d1 from './conv2d1.jpg'
import conv2d2 from './conv2d2.jpg'
import mixed3a from './3a.jpg'

const icons = { conv2d0, conv2d1, conv2d2, '3a': mixed3a }

const layers = ['conv2d0', 'conv2d1', 'conv2d2', '3a']

const families = {
  conv2d0: [
    {
      name: 'Gabor Filters',
      icon: featureVis('InceptionV1', 'conv2d0', 49),
      percentage: 65,
    },
    {
      name: 'Color Contrast',
      icon: featureVis('InceptionV1', 'conv2d0', 50),
      percentage: 21,
    },
    {
      name: 'Other Units',
      icon: featureVis('InceptionV1', 'conv2d0', 42),
      percentage: 14,
    },
  ],
  conv2d1: [
    {
      name: 'Complex Gabor',
      icon: featureVis('InceptionV1', 'conv2d1', 49),
      href:
        'https://distill.pub/2020/circuits/early-vision/#group_conv2d1_complex_gabor',
      percentage: 54,
    },
    {
      name: 'Gabor Like',
      icon: featureVis('InceptionV1', 'conv2d1', 63),
      href:
        'https://distill.pub/2020/circuits/early-vision/#group_conv2d1_gabor_like',
      percentage: 23,
    },
    {
      name: 'Low Frequency',
      icon: featureVis('InceptionV1', 'conv2d1', 29),
      href:
        'https://distill.pub/2020/circuits/early-vision/#group_conv2d1_low_frequency',
      percentage: 19,
    },
  ],
  conv2d2: [
    {
      name: 'Line',
      icon: featureVis('InceptionV1', 'conv2d2', 100),
      href:
        'https://distill.pub/2020/circuits/early-vision/#group_conv2d2_line',
      percentage: 47,
    },
    {
      name: 'Color Contrast',
      icon: featureVis('InceptionV1', 'conv2d2', 115),
      href:
        'https://distill.pub/2020/circuits/early-vision/#group_conv2d2_color_contrast',
      percentage: 19,
    },
    {
      name: 'Shifted Line',
      icon: featureVis('InceptionV1', 'conv2d2', 179),
      href:
        'https://distill.pub/2020/circuits/early-vision/#group_conv2d2_shifted_line',
      percentage: 9,
    },
  ],
  '3a': [
    {
      name: 'Curves',
      icon: featureVis('InceptionV1', 'mixed3a', 147),
      href:
        'https://distill.pub/2020/circuits/early-vision/#group_mixed3a_curves',
      percentage: 22,
    },
    {
      name: 'Lines',
      icon: featureVis('InceptionV1', 'mixed3a', 134),
      href: `https://distill.pub/2020/circuits/early-vision/#group_mixed3a_lines`,
      percentage: 16,
    },
    {
      name: 'Angles',
      icon: featureVis('InceptionV1', 'mixed3a', 100),
      href:
        'https://distill.pub/2020/circuits/early-vision/#group_mixed3a_angles',
      percentage: 16,
    },
  ],
}

const iconSize = 30

export default () => (
  <Figure>
    <Surface alignSelf="center">
      {layers.map((layer) => (
        <Surface marginY={10} flexFlow="row" alignItems="center">
          <Surface flexFlow="row" width={110}>
            <Text
              fontSize={12}
              alignSelf="flex-end"
              marginX={5}
              transform="translateY(2px)"
            >
              layer
            </Text>
            <Text fontWeight={600} fontSize={18}>
              {layer}
            </Text>
          </Surface>
          <Surface
            borderRadius={5}
            marginLeft={10}
            marginRight={10}
            overflow="hidden"
            border="1px solid rgba(0, 0, 0, 0.2)"
          >
            <img
              width={iconSize + 4}
              height={iconSize + 4}
              src={icons[layer]}
            />
          </Surface>
          <Text fontSize={16}>=</Text>
          {families[layer].map(({ name, href, icon, percentage }, index) => (
            <React.Fragment>
              <Surface
                width={230}
                onClick={() => {
                  window.open(href, '_blank')
                }}
              >
                <Surface
                  cursor="pointer"
                  flexFlow="row"
                  paddingX={8}
                  paddingY={4}
                  borderRadius={5}
                  border="1px solid rgba(0, 0, 0, 0.1)"
                  alignItems="center"
                  marginX={10}
                  background="white"
                  justifyContent="space-between"
                >
                  <Surface flexFlow="row">
                    <Surface
                      width={iconSize}
                      height={iconSize}
                      position="relative"
                    >
                      <img
                        style={{
                          position: 'absolute',
                          left: 0,
                          borderRadius: 5,
                          top: 0,
                          zIndex: 1000,
                        }}
                        width={iconSize}
                        height={iconSize}
                        src={icon}
                      />
                      <Surface
                        position="absolute"
                        zIndex={500}
                        left={2}
                        top={2}
                        opacity={0.8}
                        borderRadius={5}
                        width={iconSize}
                        height={iconSize}
                        background="rgba(0, 0, 0, 0.08)"
                        border="1px solid rgba(0, 0, 0, 0.1)"
                      />
                      <Surface
                        position="absolute"
                        left={4}
                        top={4}
                        opacity={0.8}
                        borderRadius={5}
                        width={iconSize}
                        height={iconSize}
                        background="rgba(0, 0, 0, 0.08)"
                        border="1px solid rgba(0, 0, 0, 0.1)"
                      />
                    </Surface>
                    <Text
                      fontSize={name.length > 10 ? 14 : 16}
                      fontWeight={600}
                      marginLeft={10}
                    >
                      {name}
                    </Text>
                  </Surface>
                  <Text opacity={0.7} marginLeft={10}>
                    {percentage}%
                  </Text>
                </Surface>
              </Surface>
              {index < families[layer].length - 1 && (
                <Text fontSize={16}>+</Text>
              )}
              {layer !== 'conv2d0' && index === families[layer].length - 1 && (
                <Text fontSize={16}>...</Text>
              )}
            </React.Fragment>
          ))}
        </Surface>
      ))}
    </Surface>
    <figcaption style={{ alignSelf: 'center', width: 704, marginTop: 10 }}>
      We decompose the highest magnitude spatial position in each layer into
      neuron families to see which families contribute most to curve detection.
      This is similar to a semantic dictionary interface in{' '}
      <a href="https://distill.pub/2018/building-blocks/">
        The Building Blocks of Interpretability
      </a>
      .<d-cite bibtex-key="olah2018building" />
    </figcaption>
  </Figure>
)
