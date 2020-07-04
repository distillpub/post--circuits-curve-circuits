import Article from './article.md'
import React from 'react'
const MyH1 = (props) => <h1 style={{ color: 'tomato' }} {...props} />
const MyParagraph = (props) => (
  <p style={{ fontSize: '18px', lineHeight: 1.6 }} />
)
const components = {
  h1: MyH1,
  p: MyParagraph,
}

export default function Home() {
  return (
    <d-article>
      <style jsx global>{`
        .show-in-index {
          display: grid !important;
        }
      `}</style>
      <Article components={components} />
    </d-article>
  )
}
