import React, { Component } from 'react'
import Draggable from 'react-draggable';

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
          <img className='nav-icon' src='icons/home.png' />
          <img className='nav-icon' src='icons/file.png' />
          <img className='nav-icon' src='icons/happy.png' />
          <img className='nav-icon' src='icons/mail.png' />
        </div>
      </Draggable>
    )
  }
}
