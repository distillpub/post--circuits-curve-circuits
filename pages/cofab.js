import React from 'react'

export default (fn) => {
  return class extends React.Component {
    state = { data: null }
    fetchData = async () => {
      if (typeof window === 'undefined') return
      const queryString = window.location.search
      const urlParams = new URLSearchParams(queryString)
      const url = urlParams.get('data_url')

      const data = await (await fetch(url)).json()
      this.setState({ data })
    }

    componentWillMount() {
      const { cofab } = this.props
      this.fetchData()
    }

    render() {
      const Fn = fn
      const { data, ...props } = this.props
      if (this.props.data) {
        let { data } = this.props
        return <Fn {...data} {...props} />
      }

      if (this.state.data) {
        let { data } = this.state
        return <Fn {...data} {...props} />
      }

      return <div>loading</div>
    }
  }
}
