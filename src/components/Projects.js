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
      <div>
        <h1>{`http://`}pseuyi.xyz  <br />
          freda suyi nada/ding <br />
        is a chinatown, nyc based web developer <br />
          <div className='links'>
            <a href='https://github.com/pseuyi' target="_blank">github</a>
            <a href='https://www.linkedin.com/in/pseuyi' target="_blank">linkedin</a>
            <a href='https://www.are.na/freda-nada' target="_blank">are.na</a>
            <a href='/cv' target="_blank">cv</a>
            <a href='https://twitter.com/pseuyi' target="_blank">@pseuyi</a>
          </div>
          select projects they have worked on recently:
        </h1>
        <Project projects={this.state.projects} />
      </div>
    )
  }
}
