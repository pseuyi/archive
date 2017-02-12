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
      <Project projects={this.state.projects} />
    )
  }
}
// <h2>projects</h2>
