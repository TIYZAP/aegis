import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router'

//import components
import Layout from './components/Layout'
import Home from './components/Home'
import FrontEnd from './components/FrontEnd'
import BackEnd from './components/BackEnd'
import Meetup from './components/Meetup'
import About from './components/About'
import ContactUs from './components/ContactUs'

document.addEventListener('DOMContentLoaded', function(event){
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Home} />
                <Route path="/frontend" component={FrontEnd}/>
                <Route path="/backend" component={BackEnd}/>
                <Route path="/meetup" component={Meetup}/>
                <Route path="/about" component={About}/>
                <Route path="/contactus" component={ContactUs}/>
            </Route>
        </Router>,
        document.getElementById('app')
    )
})
