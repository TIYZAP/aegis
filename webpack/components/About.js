import React from 'react'

class About extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row about-section middle-container">
                    <h1 className="text-center">About Us</h1>
                    <div className="col-sm-6 about-pics text-center">
                        <img src="https://unsplash.it/300/300?random"/>
                        <h2>Manpreet Singh</h2>
                    </div>
                    <div className="col-sm-6 about-pics text-center">
                        <img src="https://unsplash.it/300/300?random"/>
                        <h2>Chris Flack</h2>
                    </div>
                    <div className="col-sm-6 about-pics text-center">
                        <img src="https://unsplash.it/300/300?random"/>
                        <h2>Keith Smith</h2>
                    </div>
                    <div className="col-sm-6 about-pics text-center">
                        <img src="https://unsplash.it/300/300?random"/>
                        <h2>Zachary Pinner</h2>
                    </div>
                </div>
            </div>
        )
    }
}
export default About
