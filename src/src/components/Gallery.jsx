import React, { Component, Fragment } from 'react'
import {Loader, } from '../components' 

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500)

  }


  render() {
    return (
      this.state.isLoading ? <Loader type={"bars"} /> : <Fragment>
        
      <div className="mtspace">
        
        
        Gallery
        
        </div>
      </Fragment>

    )
  }
}
