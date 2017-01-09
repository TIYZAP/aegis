import React from 'react'

class AboutUs extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row middle-container">
                    <h1 className="text-center">Contact Us</h1>
                    <div className="col-sm-6 col-sm-offset-3 contact-form">
                        <form action="https://formspree.io/james.hildreth@theironyard.com" method="POST">
                        <div className="col-sm-6 form-group">
                            <input className="form-control" name="First Name" placeholder="First Name" />
                        </div>
                        <div className="col-sm-6 form-group">
                            <input className="form-control" name="Last Name" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" name="Email" className="form-control" placeholder="Your email address" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" name="Subject"  placeholder="Subject" />
                        </div>
                        <div className="form-group">
                        <textarea name="Message" className="form-control"  rows="10" placeholder="Enter your message here..." />
                        </div>
                        <br/>
                        <div className="text-right">
                            <input type="submit" value="Submit"></input>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutUs
