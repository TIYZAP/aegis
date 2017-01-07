import React from 'react'
//import components
import Footer from './Footer'
import Nav from './Nav'

class FrontEnd extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div classname="col-sm-12">
                            <h2 className="text-center">Interactive Coding</h2>
                            <ul>
                                <li>The Iron Yard Mini Javascript Course</li>
                                <li>Code Academy</li>
                                <li>FreeCodeCamp</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default FrontEnd
