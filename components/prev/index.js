import { Icon } from 'evergreen-ui'
import React from 'react'
import { Text, Surface } from 'components/ui'

export default class NextButton extends React.Component {
  render() {
    const { title, href } = this.props
    const hoverColor = '#0a85ea'
    const baseColor = 'rgba(0, 0, 0, 0.8)'

    return (
      <Surface
        background="hsl(54, 78%, 96%)"
        style={{ borderLeft: 'solid hsl(54, 33%, 67%) 1px' }}
        color="hsla(0, 0%, 0%, 0.67)"
        paddingY={30}
        paddingLeft={30}
        paddingRight={10}
        marginTop={60}
        marginBottom={30}
      >
        <Surface flexFlow="row">
          <img src={require('./multiple-pages.svg')} />
          <Text marginLeft={40} opacity={0.7} lineHeight={1.7}>
            This article is part of the Circuits thread, a collection of short
            articles and commentary by an open scientific collaboration delving
            into the inner workings of neural networks.
          </Text>
        </Surface>
        <Surface alignSelf="flex-start" marginTop={35}>
          <Text
            size={300}
            fontWeight={700}
            width={300}
            textTransform="uppercase"
            marginBottom={-8}
            opacity={0.6}
          >
            ← Previous Article
          </Text>
          <Text fontWeight={600} marginTop={10} opacity={0.6}>
            Overview of Early Vision
          </Text>
          <Surface
            display="inline"
            color="#999"
            fontSize="80%"
            lineHeight="140%"
            marginTop={8}
          >
            Under discussion in{' '}
            <a href="http://slack.distill.pub/">Distill slack</a>
            <code style={{ marginLeft: 5 }}>#circuits</code>
          </Surface>
        </Surface>
      </Surface>
    )
  }
}
