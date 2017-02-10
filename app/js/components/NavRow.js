import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
  render () {
    return (
      <div className="row">
        {
          this.props.links && this.props.links.map((link, idx)=>(
            <div key={idx} className="col-xs-12
              col-sm-6
              col-md-3
              col-lg-3">
              <div className="nav box">
                <Link to={`/${link.text}`}>{link.text}</Link>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}
