import React, {Component} from 'react'
import { notes } from '../notes'
import Project from './Project'

export default class extends Component {
  render () {
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
        <Project projects={notes}/>
      </div>
    )
  }
}
