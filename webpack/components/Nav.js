import React from 'react'
import { Link } from 'react-router'

class Nav extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className="container-fluid">
              <div className="row ">
                <div className="col-sm-12 col-xs-12 banner text-center">
                  <h1 className="hidden-xs">Fe26 Indy Companion App</h1>
                  <div className="row">
                      <Link to="/">
                      <div className="col-sm-3 col-xs-3"><i className="fa fa-home fa-4x" aria-hidden="true"></i><br/>Home</div>
                      </Link>
                      <Link tp="/frontend">
                      <div className="col-sm-3 col-xs-3"><img src="/images/front-end-icon.png" /><br/>Front-End</div>
                      </Link>
                      <Link to="">
                     <div className="col-sm-3 col-xs-3"><img src="/images/back-end-icon.png" /><br/>Front-End</div>
                      </Link>
                      <Link to="">
                      <div className="col-sm-3 col-xs-3"><i className="fa fa-commenting-o fa-4x" aria-hidden="true"></i><br/>Chat</div>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
export default Nav
