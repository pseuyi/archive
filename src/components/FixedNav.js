import React, { Component } from 'react'
import Draggable from 'react-draggable'
import { Link } from 'react-router'
import home from '../icons/home.png';
import happy from '../icons/happy.png';
import file from '../icons/file.png';
import mail from '../icons/mail.png';

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
            <img className='nav-icon' src={home} alt='home icon' />
          </Link>
          <Link to='/about'>
            <img className='nav-icon' src={happy} alt='happy face icon' />
          </Link>
          <Link to='/projects'>
            <img className='nav-icon' src={file} alt='files icon' />
          </Link>
          <a href='mailto:pseuyi@gmail.com?Subject=hi'>
            <img className='nav-icon' src={mail} alt='email icon' />
          </a>
        </div>
      </Draggable>
    )
  }
}
