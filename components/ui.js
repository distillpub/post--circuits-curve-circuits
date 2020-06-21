// import { Text as EvergreenText, Pane } from 'evergreen-ui'
import { isFunction } from 'lodash'
import React from 'react'

export class Surface extends React.Component {
  state = { isHovering: false }
  render() {
    const { isHovering } = this.state
    const {
      children,
      id,
      onMouseEnter,
      onMouseLeave,
      onClick,
      key,
      ...styles
    } = this.props

    const addMouseEvents = isFunction(children)
      ? {
          onMouseEnter: (e) => {
            this.setState({ isHovering: true })
            if (this.props.onMouseEnter) {
              this.props.onMouseEnter(e)
            }
          },
          onMouseLeave: (e) => {
            this.setState({ isHovering: false })
            if (this.props.onMouseLeave) {
              this.props.onMouseLeave(e)
            }
          },
        }
      : {}

    if (styles.marginY) {
      styles['marginTop'] = styles.marginY
      styles['marginBottom'] = styles.marginY
      delete styles['marginY']
    }

    if (styles.paddingY) {
      styles['paddingTop'] = styles.paddingY
      styles['paddingBottom'] = styles.paddingY
      delete styles['paddingY']
    }

    if (styles.marginX) {
      styles['marginLeft'] = styles.marginX
      styles['marginRight'] = styles.marginX
      delete styles['marginX']
    }

    if (styles.paddingX) {
      styles['paddingLeft'] = styles.paddingX
      styles['paddingRight'] = styles.paddingX
      delete styles['paddingX']
    }

    const addProps = { key, onClick, id, onMouseEnter, onMouseLeave }

    return (
      <div
        {...addProps}
        style={{
          display: 'flex',
          flexFlow: 'column',
          boxSizing: 'border-box',
          ...styles,
        }}
        {...addMouseEvents}
      >
        {isFunction(children) ? children(isHovering) : children}
      </div>
    )
  }
}

export const Placeholder = ({ figure = '', children }) => {
  return (
    <Surface
      marginY={20}
      alignSelf="center"
      style={{ border: '1px solid rgba(0, 0, 0, 0.2)' }}
      borderRadius={5}
      boxShadow="1px 1px 5px rgba(0, 0, 0, 0.1)"
      width={400}
      padding={10}
    >
      <Surface flexFlow="row" justifyContent="space-between">
        <Text opacity={0.7}>Placeholder</Text>
        <Text opacity={0.7}>{figure}</Text>
      </Surface>
      <Surface marginTop={5}>{children}</Surface>
    </Surface>
  )
}

export const FigureHeading = ({ children, ...props }) => (
  <Surface
    marginTop={10}
    borderBottom
    paddingBottom={14}
    marginBottom={20}
    alignSelf="center"
  >
    <Text
      fontSize={18}
      marginLeft={10}
      lineHeight="20px"
      fontWeight={600}
      {...props}
    >
      {children}
    </Text>
  </Surface>
)

export const ZoomedImg = ({ src, size, padding, style, ...props }) => {
  let leftOffset = 0
  let topOffset = 0
  if (!padding) {
    if (
      src.indexOf('conv2d2') > -1 ||
      src.indexOf('conv2d1') > -1 ||
      src.indexOf('conv2d0')
    ) {
      padding = 0
    }
    if (src.indexOf('mixed3a') > -1 || src.indexOf('mixed3b') > -1) {
      padding = 0
    }

    if (
      src.indexOf('mixed4a') > -1 ||
      src.indexOf('mixed4b') > -1 ||
      src.indexOf('mixed4c') > -1
    ) {
      padding = 0
    }
  }

  return (
    <div
      style={Object.assign(
        {},
        {
          width: size,
          height: size,
          overflow: 'hidden',
          borderRadius: 5,
          position: 'relative',
        },
        style
      )}
      {...props}
    >
      <img
        src={src}
        width={size + padding * 2}
        height={size + padding * 2}
        style={{ position: 'absolute', left: -padding, top: -padding }}
      />
    </div>
  )
}

export const Text = (props) => {
  let { size, children, ...rest } = props

  if (size) {
    const allSizeProps = {
      400: {
        fontSize: 14,
        fontWeight: 600,
      },
      500: {
        fontSize: 16,
        fontWeight: 500,
      },
      600: {
        fontSize: 20,
        fontWeight: 500,
      },
    }
    const sizeProps = allSizeProps[size] || {}

    rest = { ...rest, ...sizeProps }
  }

  return (
    <Surface color="black" display="inline-block" {...rest}>
      {children}
    </Surface>
  )
}

export const Paragraph = ({ children, ...props }) => (
  <Text
    gridColumn="text"
    fontSize={17}
    lineHeight={'28px'}
    marginY={10}
    {...props}
  >
    {children}
  </Text>
)

export const Heading2 = ({ fontSize = 20, children, ...props }) => (
  <Surface marginTop={40} marginBottom={20} gridColumn="text">
    <Text color="black" fontSize={fontSize} fontWeight={600} {...props}>
      {children}
    </Text>
  </Surface>
)

export const Heading = ({ fontSize = 30, children, ...props }) => (
  <Surface
    borderBottom
    marginTop={32}
    marginBottom={24}
    paddingBottom={16}
    gridColumn="text"
  >
    <Text fontSize={fontSize} lineHeight="20px" fontWeight={600} {...props}>
      {children}
    </Text>
  </Surface>
)
