import React from 'react'
import { notes } from '../notes'
import Project from './Project'

const Notes = ()=>(
  <div>
    <h1>
      ongoing <br />
    </h1>
    <h2>
      assorted app sketches/<br />
      programming concepts/<br />
      notes/<br />
      ongoing projects
    </h2>
    <Project projects={notes} />
  </div>
)

export default Notes
