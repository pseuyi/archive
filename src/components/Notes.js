import React, {Component} from 'react'
import { projects } from '../notes'
import Project from './Project'

export default class extends Component {
  render () {
    console.log(projects)
    return (
      <div>
        <h1>
          notes <br />
        </h1>
        <h2>
          assorted app sketches/<br />
          programming concepts/<br />
          projects in progress
        </h2>
        <Project projects={projects}/>
      </div>
    )
  }
}
