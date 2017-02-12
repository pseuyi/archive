import React, { Component } from 'react'
import Draggable from 'react-draggable'
import { Link } from 'react-router'

export default class extends Component {
  constructor () {
    super()
    this.state = {
      drag: true
    }
    this.startDrag = this.startDrag.bind(this)
  }
  startDrag () {
    this.setState({drag:false})
  }
  render () {
    console.log('current drag state', this.state.drag)
    return (
      <Draggable>
        <div className='fixed-nav' onClick={this.startDrag}>
          {
            this.state.drag?
            <p>pick me up</p>
            : <p>navigator</p>
          }
          <Link to='links'>
            <img className='nav-icon' src='icons/home.png' />
          </Link>
          <Link to='/about'>
            <img className='nav-icon' src='icons/happy.png' />
          </Link>
          <Link to='/projects'>
            <img className='nav-icon' src='icons/file.png' />
          </Link>
          <a href='mailto:pseuyi@gmail.com?Subject=hi'>
            <img className='nav-icon' src='icons/mail.png' />
          </a>
        </div>
      </Draggable>
    )
  }
}
