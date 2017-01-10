import React from 'react'
import { Link } from 'react-router'

class Footer extends React.Component {
    constructor(){
        super()
    }
    render(){
        return (
            <div className="container-fluid footer">
              <div className="row text-center">
                <div className="col-sm-12 col-xs-12"><h4>Iron Yard Graduates Copyright</h4></div>
                <Link to="/about">
                <div className="col-sm-6 col-xs-6"><h4>About</h4></div>
                </Link>
                <Link to="/contactus">
                <div className="col-sm-6 col-xs-6"><h4>Contact Us</h4></div>
                </Link>
              </div>
            </div>
        )
    }
}
export default Footer
