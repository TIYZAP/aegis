import React from 'react'
import { Link } from 'react-router'


class Home extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <div className="container-fluid">
              <div className="row ">
                <div className="col-sm-12 col-xs-12 banner text-center">
                  <h1>Fe26 Indy Companion App</h1>
                </div>
              </div>
              <div className="row logo">
                <div className="col-sm-12">
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-xs-12 home-box-selection">
                  <div className="col-sm-4 text-center"><img src="/images/front-end-icon.png" alt="" /><h2>Front-End Engineering</h2></div>
                  <div className="col-sm-8 hidden-xs"><h4>Front-End Engineering focuses on creating experiences in web browser that users see and interact with. The discipline covers a broad area, from web design principles to complex JavaScript applications that manage data. The tools used in front-end engineering are ubiquitous--no matter the technology used on the back end, front-enders are responsible for delivering the experience and data to the person using the web application.</h4></div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-xs-12 home-box-selection">
                  <div className="col-sm-4  text-center"><img src="/images/back-end-icon.png" alt="" />
                    <h2>Back-End Engineering</h2></div>
                    <div className="col-sm-8 hidden-xs"><h4>Back-End Engineering focuses on the logic and database needs required to run and scale web applications. Back-end products combine databases, APIs, and user interface frameworks. Back-end developers deploy fully-formed products to the cloud, integrate with online services, and enable mobile and front-end applications.</h4></div>
                  </div>
                </div>

              <div className="row">
                <div className="col-sm-12 col-xs-12 home-box-selection">
                  <div className="col-sm-4 text-center"><i className="fa fa-commenting-o fa-4x" aria-hidden="true"></i>
                    <h2>Grad Chat</h2></div>
                    <div className="col-sm-8 hidden-xs"><h4>It doesn't end here! Network with the Indy tech community w/ Meetup and join the TIY Slack channel to stay connected! </h4></div>
                  </div>
                </div>
            </div>
            <div className="container-fluid footer">
              <div className="row text-center">
                <div className="col-sm-12 col-xs-12"><h3>Iron Yard Graduates Copyright</h3></div>
                <div className="col-sm-4 col-xs-4"><h3>Developers</h3></div>
                <div className="col-sm-4 col-xs-4"><h3>Contact Us</h3></div>
                <div className="col-sm-4 col-xs-4"></div>
              </div>
            </div>
        </div>
        )
    }
}
export default Home