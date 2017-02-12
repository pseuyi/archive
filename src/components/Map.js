import React, { Component } from 'react'
import FixedNav from './FixedNav'

export default class extends Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div className='map'>
        <FixedNav />
        <p className='cloud'>sketches</p>
        <p className='cloud'>projects</p>
        <p className='cloud'>about</p>
      </div>
    )
  }
}
