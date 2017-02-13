import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  render () {
    return (
      <div className='map'>
        <h2 id='name'>freda nada suyi/ding
          <div className='links'>
            <a href='https://github.com/pseuyi'>github</a>
            <a href='https://www.linkedin.com/in/pseuyi'>linkedin</a>
            <a href='https://www.are.na/freda-nada'>are.na</a>
            <a href='mailto:pseuyi@gmail.com?Subject=hi'>email</a>
          </div>
        </h2>
        <h2><Link to='notes' className='cloud link-1'>sketches</Link></h2>
        <h2 className='cloud link-2'>projects</h2>
        <h2 className='cloud link-3'>about</h2>
      </div>
    )
  }
}
