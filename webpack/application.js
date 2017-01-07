import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Link } from 'react-router'

//import components
import Home from './components/Home'
import FrontEnd from './components/FrontEnd'
document.addEventListener('DOMContentLoaded', function(event){
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={Home}/>
            <Route path="/frontend" component={FrontEnd}/>
        </Router>,
        document.getElementById('app')
    )
})
