import React, { Component } from 'react'

export default class extends Component {
  render () {
    return (
      <div className='about'>
        <h1>about</h1>

        <ul>
          <li className='desc'>
            <p>freda nada (b. freda suyi ding) is a web developer based in chinatown, nyc <br />
            interested in topics related to new media, digital labor, and frameworks for social progress
            </p>
          </li>
          <div className='row'>
            <li className='col-xs-12
              col-sm-6
              col-md-6
              col-lg-6'>
              <h4>currently</h4>
              <p>teaching fellow for an immersive online code school<br />
                mentor for syrian women learning javascript
              </p>
            </li>
            <li className='col-xs-12
              col-sm-6
              col-md-6
              col-lg-6'>
              <h4>previously</h4>
              <p>management consultant in silicon valley<br />
                freelance @ NEW INC<br />
                live programming intern @ PS1<br />
                data analyst @ AOL
              </p>
            </li>
          </div>
        </ul>
        <div className='links'>
          <a href='https://github.com/pseuyi'>github</a>
          <a href='https://www.linkedin.com/in/pseuyi'>linkedin</a>
          <a href='https://www.are.na/freda-nada'>are.na</a>
          <a href='mailto:pseuyi@gmail.com?Subject=hi'>email</a>
        </div>
      </div>
    )
  }
}
