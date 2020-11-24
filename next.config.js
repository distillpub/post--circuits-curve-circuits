const optimizedImages = require('next-optimized-images')

const withSvgr = require('next-svgr')

const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  /*
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  */
})

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  ...optimizedImages(
    withMDX({
      pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    })
  ),
  //...withImages(
  // withSvgr(
  // )
  //),
}
