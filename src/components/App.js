import React, { Component } from 'react'
import Nav from './Nav'
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
