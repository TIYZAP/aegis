import React from 'react'
//import components
import Footer from './Footer'
import Nav from './Nav'

class BackEnd extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row middle-container">
                        <div className="col-sm-12 text-center">
                            <h1>Back-End Resources</h1>
                        </div>
                    </div>
                    <div className="row resource-box-style">
                        <div className="col-sm-12">
                            <h2 className="text-center">Interactive Coding</h2>
                            <ul>
                                <li><a href="https://online.theironyard.com/paths/534/join">The Iron Yard Mini Ruby Course</a></li>
                                <li><a href="https://www.codecademy.com/">Code Academy</a></li>
                                <li><a href="https://www.freecodecamp.com/">FreeCodeCamp</a></li>
                                <li><a href="https://www.codeschool.com/">Code School</a></li>
                                <li><a href="https://www.udacity.com/">Udacity</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row resource-box-style">
                        <div className="col-sm-12">
                            <h2 className="text-center">Coding Practice Website</h2>
                            <ul>
                                <li><a href="https://www.codewars.com">CodeWars</a></li>
                                <li><a href="https://www.hackerrank.com/">Hackers Rank</a></li>
                                <li><a href="http://www.exercism.io/">Exorcism.io</a></li>
                                <li><a href="https://www.coderbyte.com/">Coderbyte</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row resource-box-style">
                        <div className="col-sm-12">
                            <h2 className="text-center">HTML / CSS</h2>
                            <ul>
                                <li><a href="http://www.htmldog.com/guides/html/beginner/">HTML-Dog</a></li>
                                <li><a href="http://www.html-5-tutorial.com/">HTML5-Tutorial</a></li>
                                <li><a href="http://learn.shayhowe.com/">Learn to Code HTML & CSS</a></li>
                                <li><a href="http://www.w3schools.com/html/default.asp">W3Schools-HTML</a></li>
                                <li><a href="https://css-tricks.com/">CSS-Tricks</a></li>
                                <li><a href="http://flexboxfroggy.com/">Flexbox-Froggy</a></li>
                                <li><a href="http://www.w3schools.com/css/">W3Schools-CSS</a></li>
                                <li><a href="http://www.csstutorial.net/">CSS-Tutorial</a></li>
                                <li><a href="https://code.tutsplus.com/series/css3-mastery--net-18126?url=http%3A%2F%2Fcode.tutsplus.com%2Fseries%2Fcss3-mastery--net-18126&mbsy=99LHl&campaignid=20686&mbsy_source=f5856874-3bee-46be-945d-b415dfd393ba">CSS-Mastery</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row resource-box-style">
                        <div className="col-sm-12">
                            <h2 className="text-center">Ruby / Ruby on Rails</h2>
                            <ul>
                                <li><a href="http://rubylearning.com/">Ruby Learning</a></li>
                                <li><a href="https://learnrubythehardway.org/book/">Learn Ruby - The Hard Way</a></li>
                                <li><a href="https://www.railstutorial.org/book">Ruby on Rails Tutorial</a></li>
                                <li><a href="http://guides.railsgirls.com/">Rails Girls</a></li>
                                <li><a href="https://www.coderbyte.com/">Coderbyte</a></li>
                                <li><a href="https://www.youtube.com/watch?v=Dji9ALCgfpM">Ruby Programming - Youtube Video</a></li>
                                <li><a href="https://www.youtube.com/watch?v=nRyUn7D8zCc">Ruby on Rails from the Ground up - Youtube Video Series</a></li>
                                <li><a href="https://www.youtube.com/watch?v=pPy0GQJLZUM">Ruby on Rails in 60mins - Youtube Video</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BackEnd
