import React, {Component} from 'react'
import { projects } from '../notes'
import Project from './Project'

export default class extends Component {
  render () {
    console.log(projects)
    return (
      <div>
        <h1>notes</h1>
        <h2>concepts/sketches/in progress</h2>
        <Project projects={projects}/>
      </div>
    )
  }
}
