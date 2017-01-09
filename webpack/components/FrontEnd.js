import React from 'react'
//import components


class FrontEnd extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row middle-container">
                        <div className="col-sm-12 text-center">
                            <h1>Front-End Resources</h1>
                        </div>
                    </div>
                    <div className="row resource-box-style">
                        <div className="col-sm-12">
                            <h2 className="text-center">Interactive Coding</h2>
                            <ul>
                                <li><a href="https://online.theironyard.com/paths/430/join">The Iron Yard Mini Javascript Course</a></li>
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
                            <h2 className="text-center">Design Inspiration</h2>
                            <ul>
                                <li><a href="https://dribbble.com/">Dribbble</a></li>
                                <li><a href="https://html5up.net/">HTML5up</a></li>
                                <li><a href="http://htmlinspiration.com/">HTML Inspiration</a></li>
                                <li><a href="http://www.cssdesignawards.com/">CSS-Design-Awards</a></li>
                                <li><a href="http://cssreel.com/">CSS-Reel</a></li>
                                <li><a href="https://www.thebestdesigns.com/">The-Best-Designs</a></li>
                                <li><a href="http://www.bestcss.in/">Best-CSS</a></li>
                                <li><a href="https://www.pinterest.com/search/pins/?q=website%20design&rs=typed&term_meta[]=website%7Ctyped&term_meta[]=design%7Ctyped">Pinterest</a></li>
                                <li><a href="http://www.uxapprentice.com/">UX Apprentice</a></li>

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
                            <h2 className="text-center">Javascript / jQuery / Node.JS / React</h2>
                            <ul>
                                <li><a href="http://jstherightway.org/">JS - The Right Way</a></li>
                                <li><a href="https://github.com/jasdeepsingh/ES6-for-humans/blob/master/README.md">ES6- For Humans</a></li>
                                <li><a href="http://kangax.github.io/compat-table/es6/">ES6- Compatability Table</a></li>
                                <li><a href="http://jswarrior.fusioncharts.com/">JS-Warrior</a></li>
                                <li><a href="http://jqfundamentals.com/">jQuery-Fundamentals</a></li>
                                <li><a href="https://oscarotero.com/jquery/">jQuery-CheatSheet</a></li>
                                <li><a href="http://www.robinwieruch.de/the-road-to-learn-react/">The Road to learn React</a></li>
                                <li><a href="https://egghead.io/courses/react-fundamentals">EggHead - React Fundamentals</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FrontEnd
