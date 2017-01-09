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
                <div className="col-sm-12 col-xs-12"><h3>Iron Yard Graduates Copyright</h3></div>
                <Link to="/about">
                <div className="col-sm-6 col-xs-6"><h3>About</h3></div>
                </Link>
                <Link to="/contactus">
                <div className="col-sm-6 col-xs-6"><h3>Contact Us</h3></div>
                </Link>
              </div>
            </div>
        )
    }
}
export default Footer
