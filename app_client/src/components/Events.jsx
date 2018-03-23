import React from "react";

const TKMS_API_Key = 'ZVGbXAY1XYuASRLrVAdARfZ4yikEatFL';
// const backupAPI_KEY = 'BZAkAGm6c4G9IYugsrmGfucSP3F5PcSf'
const numResults = 5;
const stateCode = 'ca'
const radius = 20;
const topRowStyle = {
    height: "30px"
}

const aStyle = {
    width: '100px',
    height: '56px'
}

const tcktStyle = {
    width: '110px',
    height: '110px'
}

const italic = {
    fontStyle: 'italic',
    letterSpacing: '4px',
    color: 'gray'
}

class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: null             
        }
        this.getEvents = this.getEvents.bind(this);
      } 
        
    getEvents = async () => {
        const events_api_call = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&size=${numResults}&apikey=${TKMS_API_Key}&radius=${radius}&unit=miles&countryCode=us&stateCode=${stateCode}&city=${this.props.city}`);

        const data = await events_api_call.json();
        if (data.page.totalElements === 0) {
            this.setState({
                events: null
            })
        } else {
            const eventsArr = data._embedded.events;
            this.setState({
                events: eventsArr
            })
            
        }
    }
        componentDidMount() {
            this.getEvents();
        }

        componentWillReceiveProps(nextProps) {
            // console.log(nextProps)
            if (nextProps) {
                this.getEvents();
            }
        }

        render() {
            return(
                <div className='row' style={topRowStyle}>
                    <div className="col-md-2">
                    <h6 style={italic}>  powered by</h6>
                        <a href=""><img style={tcktStyle} src="./images/tcktmstr.png" alt=""/></a>                       
                    </div>

    
                {this.state.events === null ? <div className='col-md-10'><h3>Select another city for events.</h3>
                </div> : this.state.events.map((elem, i) => {
                    return(
                        <div className="col-md-2">
                            <a href ={elem.url} target="_blank"><h5>{elem.name}</h5></a>
                            <a>
                                <img style={aStyle} src={elem.images[3].url} alt=""/>
                            </a>
                            <h6>{elem.dates.start.localDate}</h6>
                            <h6>{elem._embedded.venues[0].name}</h6>
                            

                            
                        </div>
                            
                    )
                }) }             
                   
                    <hr/>

                    

                </div> 
        )
    }
   
}    

export default Events;