import React from 'react'
import Waypoint from 'react-waypoint'

import projects from '../projects'

export default class extends React.Component {
  componentDidMount () {
    this.props.handleWaypointLeave()
  }
  render () {
    const { handleWaypointEnter, handleWaypointLeave } = this.props
    return (
      <div className="projects">
        <h2>projects</h2>
        <Waypoint
          onEnter={handleWaypointLeave}
          />
        <ul className="leaders">
          {
            projects.map((proj, idx)=>(
              <li key={idx}>
                <span><a href={proj.url}>{proj.name}</a></span>
                <span>{proj.type}</span>
              </li>
            ))
          }
        </ul>
        <Waypoint
          onEnter={handleWaypointLeave}
          />
      </div>
    )
  }
}
