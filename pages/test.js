import { Surface, Text } from 'components/ui'
import React from 'react'
import cofab from './cofab'

export default cofab(({ hello }) => (
  <Surface
    background="rgba(0, 0, 0, 0.03)"
    border="1px solid rgba(0, 0, 0, 0.1)"
    borderRadius={5}
    padding={20}
  >
    <Text size={600}>hello {hello}</Text>
  </Surface>
))
