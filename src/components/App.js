import React, { Component } from 'react'
import Nav from './Nav'
import FixedNav from './FixedNav'

export default class extends Component {
  render () {
    return (
      <div className='app'>
        <h1>freda suyi nada/ding</h1>
        {this.props.children}
        <FixedNav />
      </div>
    )
  }
}
