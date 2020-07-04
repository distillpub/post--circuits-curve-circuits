import React from 'react'
import { Surface, Text } from 'components/ui'

const red = (
  <svg
    width="77"
    height="77"
    viewBox="0 0 77 77"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="77" height="77" rx="5" fill="white" />
    <rect
      x="1"
      y="1"
      width="75"
      height="75"
      rx="4"
      stroke="black"
      stroke-opacity="0.3"
      stroke-width="2"
    />
    <line opacity="0.3" x1="1" y1="8.5" x2="76" y2="8.49999" stroke="black" />
    <line opacity="0.3" x1="9.5" y1="1" x2="9.5" y2="76" stroke="black" />
    <line
      opacity="0.68"
      x1="21.0976"
      y1="9.25942"
      x2="75.5448"
      y2="63.7066"
      stroke="black"
    />
    <line
      opacity="0.68"
      x1="9.96653"
      y1="20.576"
      x2="64.4137"
      y2="75.0232"
      stroke="black"
    />
    <line
      opacity="0.67"
      x1="42.8284"
      y1="14.1716"
      x2="70.8284"
      y2="42.1716"
      stroke="#B70B1C"
      stroke-width="8"
      stroke-linejoin="bevel"
    />
    <line
      opacity="0.67"
      x1="13.8284"
      y1="42.1716"
      x2="41.8284"
      y2="70.1716"
      stroke="#B70B1C"
      stroke-width="8"
      stroke-linejoin="bevel"
    />
  </svg>
)
const green = (
  <svg
    width="77"
    height="77"
    viewBox="0 0 77 77"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="77" height="77" rx="5" fill="white" />
    <rect
      x="1"
      y="1"
      width="75"
      height="75"
      rx="4"
      stroke="black"
      stroke-opacity="0.3"
      stroke-width="2"
    />
    <line opacity="0.3" x1="1" y1="8.5" x2="76" y2="8.49999" stroke="black" />
    <line opacity="0.3" x1="9.5" y1="1" x2="9.5" y2="76" stroke="black" />
    <line
      opacity="0.68"
      x1="21.0976"
      y1="9.25942"
      x2="75.5448"
      y2="63.7066"
      stroke="black"
    />
    <line
      opacity="0.68"
      x1="9.96653"
      y1="20.576"
      x2="64.4137"
      y2="75.0232"
      stroke="black"
    />
    <line
      opacity="0.67"
      x1="16.738"
      y1="16.3419"
      x2="68.9974"
      y2="68.6012"
      stroke="#27AE60"
      stroke-width="8"
      stroke-linejoin="bevel"
    />
  </svg>
)

export default () => (
  <Surface
    flexFlow="row"
    justifyContent="space-between"
    width={704}
    alignItems="center"
    marginY={20}
  >
    <Surface flexFlow="row" alignItems="center">
      <Surface>{green}</Surface>
      <Text size={500} width={250} marginLeft={15}>
        Curve detectors are excited by earlier detectors in{' '}
        <b>similar orientations</b>
      </Text>
    </Surface>
    <Surface flexFlow="row" alignItems="center">
      <Surface>{red}</Surface>
      <Text size={500} width={250} marginLeft={15}>
        They are inhibited by earlier detectors in <b>opposing orientations</b>
      </Text>
    </Surface>
  </Surface>
)
