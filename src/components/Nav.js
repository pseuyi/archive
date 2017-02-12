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
