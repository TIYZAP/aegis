import React from 'react'
import { Link } from 'react-router'

class Nav extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className="container-fluid banner">
              <div className="row ">
                <div className="col-sm-12 col-xs-12 text-center">
                  <div className="row">
                      <Link to="/">
                      <div className="col-sm-3 col-xs-3 nav-item"><i className="fa fa-home fa-4x" aria-hidden="true"></i><br/>Home</div>
                      </Link>
                      <Link to="/frontend">
                      <div className="col-sm-3 col-xs-3 "><img src="/images/front-end-icon.png" /><br/>Front-End</div>
                      </Link>
                      <Link to="/backend">
                     <div className="col-sm-3 col-xs-3"><img src="/images/back-end-icon.png" /><br/>Back-End</div>
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
