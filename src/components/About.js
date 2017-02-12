import React, { Component } from 'react'

export default class extends Component {
  render () {
    return (
      <div className='about'>
        <h1>freda suyi nada/ding</h1>
        <h2>about</h2>
        <ul>
          <li className='desc'>
            <p> freda nada (b. freda suyi ding) is a web developer based in chinatown, nyc</p>
            <p>
            interested in topics related to new media, digital labor, and frameworks for social progress
            </p>
          </li>
          <li>
            currently:
            <p> ~ teaching fellow for an immersive online code school</p>
          </li>
          <li>
            previously:
            <p> ~ management consultant in silicon valley</p>
            <p> ~ freelance @ NEW INC</p>
            <p> ~ live programming intern @ PS1</p>
            <p> ~ data analyst @ AOL</p>
          </li>
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
