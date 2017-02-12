import React, { Component } from 'react'
import Project from './Project'
import projects from '../projects'

export default class extends Component {
  constructor () {
    super()
    this.state = { projects }
  }
  render () {
    return (
      <div>
        <h1>freda suyi nada/ding</h1>
        <h2>projects</h2>
        <Project projects={this.state.projects} />
      </div>
    )
  }
}
