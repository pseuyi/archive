import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App'
import About from './components/About'
import Projects from './components/Projects'
import Links from './components/Links'
import './css/index.css';

ReactDOM.render(
  (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Projects}/>
      <Route path='about' component={About}/>
      <Route path='projects' component={Projects}/>
      <Route path='links' component={Links}/>
    </Route>
  </Router>
  ),
  document.getElementById('app'))
