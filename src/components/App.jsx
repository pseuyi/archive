import React from 'react'

import Header from './Header'
import Projects from './Projects'
import ProjectMenu from './ProjectMenu'
import About from './About'
import Footer from './Footer'

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      sectionName: "",
    }
  }
  handleWaypointEnter = name => {
    this.setState({sectionName: name})
  }
  handleWaypointLeave = () => {
    this.setState({sectionName: ""})
  }
  componentDidMount () {
    this.setState({sectionName: ""})
  }
  render () {
    return (
      <div>
        <div className="scroll-fix"></div>
        <div className="scroll-head">
          {this.state.sectionName}
        </div>
        <div className="app">
          <Header />
          <About />
          <ProjectMenu
            handleWaypointEnter={this.handleWaypointEnter}
            handleWaypointLeave={this.handleWaypointLeave}
          />
          <Projects
            handleWaypointEnter={this.handleWaypointEnter}
            handleWaypointLeave={this.handleWaypointLeave}
          />
        <Footer />
        </div>
      </div>
    )
  }
}
