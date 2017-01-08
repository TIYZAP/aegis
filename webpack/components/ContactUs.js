import React from 'react'

class AboutUs extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row middle-container">
                    <h1 className="text-center">Contact Us</h1>
                    <div className="contact-form">
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input className="form-control" id="subject" placeholder="Subject" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                        <textarea id="message" className="form-control" cols="80" rows="10" placeholder="Enter your message here..." />
                    </div>
                        <br/>
                        <div className="text-right">
                            <button className="btn btn-default">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutUs
