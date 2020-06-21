import { Surface, Text } from 'components/ui'
import React from 'react'
import cofab from './cofab'
import { max } from 'lodash'

export default cofab(({ families, totalWeight }) => {
  return (
    <Surface>
      <Surface flexFlow="row">
        {families.slice(0, 6).map(({ name, weight }) => (
          <Surface>
            <Text width={200}>
              {name} {(weight / totalWeight).toFixed(1)}
            </Text>
          </Surface>
        ))}
      </Surface>
    </Surface>
  )
})
