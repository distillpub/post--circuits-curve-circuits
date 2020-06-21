import React from 'react'
import { Text, Surface } from 'components/ui'

export default () => (
  <section
    id="thread-nav"
    className="thread-info"
    style={{ height: 160, marginTop: 10, marginBottom: 40 }}
  >
    <img
      className="icon"
      src={require('./multiple-pages.svg')}
      width={43}
      height={50}
    />
    <p className="explanation">
      This article is part of the <a href="/2020/circuits/">Circuits thread</a>,
      an experimental format collecting invited short articles and critical
      commentary delving into the inner workings of neural networks.
    </p>
    <a className="prev" href="/2020/circuits/curve-detectors/">
      Curve Detectors
    </a>
    <a className="next" style={{ opacity: 0.6 }}>
      Universal Curves (soon)
    </a>
  </section>
)
