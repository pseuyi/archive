import React, { Component } from 'react'
import NavRow from './NavRow'

export default class extends Component {
  render () {
    return (
      <div className='navigation'>
        <NavRow links={[
            {text:'about'},
            {text:'projects'},
            {text: 'sketches'},
            {text: 'contact'}]} />
    	</div>
    )
  }
}

// <NavRow links={[
//     {url: 'https://github.com/pseuyi', text: 'github'},
//     {url: 'https://www.linkedin.com/in/pseuyi', text: 'linkedin'},
//     {url: 'https://www.are.na/freda-nada', text: 'are.na'},
//     {url: 'mailto:pseuyi@gmail.com?Subject=hi', text: 'pseuyi@gmail.com'},
//   ]} />
//
// {[
//     {text:'about'},
//     {text:'work'},
//     {text: 'sketch'},
//     {text: 'contact'}]}
