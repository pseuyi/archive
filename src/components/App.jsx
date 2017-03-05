import React from 'react'
import FixedNav from './FixedNav'

const App = ()=>(
  <div className="app">
    {this.props.children}
    <FixedNav />
  </div>
)

export default App
