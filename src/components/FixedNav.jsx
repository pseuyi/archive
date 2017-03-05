import React, { Component } from 'react'
import Draggable from 'react-draggable'
import { Link } from 'react-router'
import home from '../icons/home.png'
import happy from '../icons/happy.png'
import file from '../icons/file.png'
import mail from '../icons/mail.png'

export default class extends Component {
  constructor () {
    super()
    this.state = {
      tooltip: 'hello',
    }
    this.toggleTooltip = this.toggleTooltip.bind(this)
  }
  toggleTooltip (text) {
    this.setState({ tooltip: text })
  }
  render () {
    return (
      <Draggable>
        <div className="fixed-nav">
          <p>{this.state.tooltip}</p>
          <Link to="/">
            <img className="nav-icon" src={home} alt="home icon" onMouseEnter={()=>this.toggleTooltip('home')} onMouseLeave={()=>this.toggleTooltip('hello')} />
          </Link>
          <Link to="about">
            <img className="nav-icon" src={happy} alt="happy face icon" onMouseEnter={()=>this.toggleTooltip('about')} onMouseLeave={()=>this.toggleTooltip('hello')} />
          </Link>
          <Link to="notes">
            <img className="nav-icon" src={file} alt="files icon" onMouseEnter={()=>this.toggleTooltip('ongoing projects')} onMouseLeave={()=>this.toggleTooltip('hello')} />
          </Link>
          <a href="mailto:pseuyi@gmail.com?Subject=hi">
            <img className="nav-icon" src={mail} alt="email icon" onMouseEnter={()=>this.toggleTooltip('send an email')} onMouseLeave={()=>this.toggleTooltip('hello')} />
          </a>
        </div>
      </Draggable>
    )
  }
}
