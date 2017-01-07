import React from 'react'

class Footer extends React.Component {
    constructor(){
        super()
    }
    render(){
        return (
            <div className="container-fluid footer">
              <div className="row text-center">
                <div className="col-sm-12 col-xs-12"><h3>Iron Yard Graduates Copyright</h3></div>
                <div className="col-sm-4 col-xs-4"><h3>About</h3></div>
                <div className="col-sm-4 col-xs-4"><h3>Contact Us</h3></div>
                <div className="col-sm-4 col-xs-4"></div>
              </div>
            </div>
        )
    }
}
export default Footer
