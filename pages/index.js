import Article from './article.md'
import React from 'react'

export default function Home() {
  return (
    <d-article>
      <style jsx global>{`
        .show-in-index {
          display: grid !important;
        }
      `}</style>
      <Article />
    </d-article>
  )
}
