import React, { Component } from 'react'
import FixedNav from './FixedNav'

export default class extends Component {
  render () {
    return (
      <div className='app'>
        {this.props.children}
        <FixedNav />
      </div>
    )
  }
}
