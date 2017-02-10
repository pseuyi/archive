import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App'
import About from './components/About'
import Projects from './components/Projects'

ReactDOM.render(
  (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Projects}/>
      <Route path='about' component={About}/>
    </Route>
  </Router>
  ),
  document.getElementById('app'))
