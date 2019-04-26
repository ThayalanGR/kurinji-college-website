import React, { Component } from 'react'
import { Loader, Navbar } from './components'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000)
  }

  render() {
    return (
      this.state.isLoading ? <Loader type={"spinningBubbles"} /> : <Navbar />

    );
  }
}


