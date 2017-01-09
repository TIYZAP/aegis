import React from 'react'
//import components
import Footer from './Footer'
import Nav from './Nav'


class Layout extends React.Component {
    render(){
        var testData = {
            user1:{
                name: 'jimmy',
                age: 6
            },
            user2:{
                name: 'john',
                age: 4
            }
        }
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
