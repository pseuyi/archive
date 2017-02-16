import React, {Component} from 'react'
var ReactMarkdown = require('react-markdown');

export default class extends Component {
  render () {
    const projects = this.props.projects
    return (
      <div className='row'>
      {
        projects && projects.map((proj, idx)=>(
            <div key={idx} className="col-xs-12
              col-sm-6
              col-md-6
              col-lg-4">
              <div className="project box ">
                <a href={`${proj.url}`} target="_blank">
                  <img className="thumbnail" src={process.env.PUBLIC_URL + (proj.imgsrc? proj.imgsrc : `images/${proj.name}.png`)} alt={`${proj.name} thumbnail`} />
                  <h3>{proj.name}</h3>
                </a>
                {
                  proj.giturl.length>0? (<a href={proj.giturl} className="octicon" target="_blank">
                  {'< / >'}</a>)
                  : null
                }
                <p className='type'>{proj.type}</p>
                <ReactMarkdown source={proj.desc} />
              </div>
            </div>
        ))
      }
      </div>
    )
  }
}
