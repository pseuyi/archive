import React from 'react'
import Waypoint from 'react-waypoint'

import screenshots from '../screenshots'

export default class extends React.Component {
  componentDidMount () {
    this.props.handleWaypointLeave()
  }
  render () {
    const { handleWaypointEnter, handleWaypointLeave } = this.props
    return (
      <div className="screenshots">
        {
          screenshots.map((proj, idx)=>(
            <div className="screenshot">
              <Waypoint
                onEnter={()=>handleWaypointEnter(proj)}
                />
              <img className="thumbnail" src={process.env.PUBLIC_URL + (`/screenshots/${proj}.png`)} alt={`${proj} thumbnail`}/>
              <Waypoint
                onEnter={()=>handleWaypointEnter(proj)}
                />
            </div>
          ))
        }
      </div>
    )
  }
}
