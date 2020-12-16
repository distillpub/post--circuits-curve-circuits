import 'regenerator-runtime'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import ReactDOM from 'react-dom'
import Article from './article'
import Banner from './banner'

window.process = 'development'
window.React = React

ReactDOM.render(<Banner />, document.querySelector('d-title'))
ReactDOM.render(
  <Article
    components={{
      wrapper: React.Fragment,
      h2: ({ children }) => {
        const _id = children.replace(/\ /g, '-').toLowerCase()
        return (
          <a style={{ borderBottom: 'none' }} href={'#' + _id}>
            <h2 id={_id}>{children}</h2>
          </a>
        )
      },
      h3: ({ children }) => {
        const _id = children.replace(/\ /g, '-').toLowerCase()
        return (
          <a style={{ borderBottom: 'none' }} href={'#' + _id}>
            <h3 id={_id}>{children}</h3>
          </a>
        )
      },
    }}
  />,
  document.querySelector('d-article')
)
