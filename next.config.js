const withImages = require('next-images')
const withSvgr = require('next-svgr')

const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  ...withImages(
    withSvgr(
      withMDX({
        pageExtensions: ['js', 'jsx', 'md', 'mdx'],
      })
    )
  ),
}
