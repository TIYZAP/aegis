import React from 'react'

class Meetup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            meetups: []
        }
    }
    componentDidMount(){
        fetch('/api/meetup/index')
        .then(response => response.json())
        // .then(response => {
        //     console.log(response)
        // })
        .then(response => this.setState({meetups: response.meetups}))
    }
    render(){
        console.log(this.state.meetup)
        var allMeetups = this.state.meetups.map((meetup, i) => {
          function dangerousHTML() {
            return {__html: meetup.description}
          }
            return <div className="col-sm-12 singleMeetup" key={i}>
                        <div className="col-sm-4">
                            <img className="img-responsive" src={meetup.image} />
                        </div>
                        <div className="col-sm-8">
                            <h1>{meetup.name}</h1>
                            <h3>{meetup.city}, {meetup.state}</h3>
                            <h3><a href={meetup.link} target="_blank">Link to Meetup</a></h3>
                            <div dangerouslySetInnerHTML={dangerousHTML()} />
                            {/* <p>{meetup.description.replace(/<p>/g, "")}</p> */}
                        </div>
                    </div>
        })
        return (
            <div className="container">
                <div className="row middle-container">
                    <h1 className="text-center">List of Meetups</h1>
                    {allMeetups}
                </div>
            </div>
        )
    }
}
export default Meetup
