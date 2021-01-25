import Document, { Html, Head, Main, NextScript } from 'next/document'
import Banner from './banner'
import styles from './styles'

class MyDocument extends Document {
  render() {
    const byline = {
      title: 'Curve Circuits',
      description:
        'Reverse engineering the curve detection algorithm from InceptionV1 and reimplementing it from scratch.',
      authors: [
        {
          author: 'Nick Cammarata',
          authorURL: 'http://nickcammarata.com',
          affiliation: 'OpenAI',
          affiliationURL: 'https://openai.com',
        },
        {
          author: 'Gabriel Goh',
          authorURL: 'http://gabgoh.github.io',
          affiliation: 'OpenAI',
          affiliationURL: 'https://openai.com',
        },
        {
          author: 'Shan Carter',
          authorURL: 'http://shancarter.com',
          affiliation: 'Observable',
          affiliationURL: 'https://observablehq.com',
        },
        {
          author: 'Ludwig Schubert',
          authorURL: 'https://schubert.io/',
          affiliation: '',
          affiliationURL: '',
        },
        {
          author: 'Chelsea Voss',
          authorURL: 'https://twitter.com/mpetrov',
          affiliation: 'OpenAI',
          affiliationURL: 'https://openai.com',
        },
        {
          author: 'Chris Olah',
          authorURL: 'https://colah.github.io',
          affiliation: 'OpenAI',
          affiliationURL: 'https://openai.com',
        },
      ],
    }

    return (
      <Html>
        <Head />
        <body>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=1250" />
          <style dangerouslySetInnerHTML={{ __html: styles() }} />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
            integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
            crossOrigin="anonymous"
          />
          <script src="https://cdn.jsdelivr.net/gh/davidjbradshaw/iframe-resizer/js/iframeResizer.contentWindow.min.js"></script>
          <script src="https://distill.pub/template.v2.js"></script>
          <d-front-matter>
            <script
              type="text/json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(byline) }}
            ></script>
          </d-front-matter>
          <d-title class="show-in-index">
            <h1>Curve Circuits</h1>
            <p style={{ fontSize: '1.4rem', marginBottom: 40 }}>
              We reverse engineer a non-trivial learned algorithm from the
              weights of a neural network and use its core ideas to craft an{' '}
              <i>artificial artificial neural network</i> from scratch that
              reimplements it.
            </p>
            <Banner />
          </d-title>
          <d-byline class="show-in-index"></d-byline>
          <Main />
          <NextScript />
          <d-bibliography src="/bibliography.bib"></d-bibliography>
          <d-appendix class="show-in-index">
            <d-footnote-list></d-footnote-list>
            <d-citation-list></d-citation-list>

            <h3>Author Contributions</h3>
            <p></p>

            <h3>Acknowledgements</h3>
            <p></p>
          </d-appendix>
        </body>
      </Html>
    )
  }
}

export default MyDocument
