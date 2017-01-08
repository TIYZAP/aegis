import React from 'react'
//import components
import Footer from './Footer'
import Nav from './Nav'


class Layout extends React.Component {
    render(){
        return (
            <div>
                <Nav />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
export default Layout
