import React, { Component } from 'react'
import FixedNav from './FixedNav'

export default class extends Component {
  render () {
    return (
      <div className='map'>
        <FixedNav />
        <p className='cloud link-1'>sketches</p>
        <p className='cloud link-2'>projects</p>
        <p className='cloud link-3'>about</p>
      </div>
    )
  }
}
