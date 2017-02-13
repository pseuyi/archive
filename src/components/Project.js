import React, {Component} from 'react'

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
                <a href={`${proj.url}`}>
                  <img className="thumbnail" src={process.env.PUBLIC_URL + (proj.imgsrc? proj.imgsrc : `images/${proj.name}.png`)} alt={`${proj.name} thumbnail`} />
                  <h3>{proj.name}</h3>
                </a>
                <a href={proj.giturl} className="octicon">
                  {'< / >'}
                </a>
                <p className='type'>{proj.type}</p>
                <p>{proj.desc}</p>
              </div>
            </div>
        ))
      }
      </div>
    )
  }
}
