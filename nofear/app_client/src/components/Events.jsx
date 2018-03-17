import React from "react";

const TKMS_API_Key = 'ZVGbXAY1XYuASRLrVAdARfZ4yikEatFL';
const backupAPI_KEY = 'BZAkAGm6c4G9IYugsrmGfucSP3F5PcSf'
const numResults = 6;
const stateCode = 'ca'
const radius = 20;
const topRowStyle = {
    height: "30px"
}
const titleStyle = {
    height: '100%'
}
class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []             
        }
        this.getEvents = this.getEvents.bind(this);
      } 
        
    getEvents = async () => {
        const events_api_call = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?&size=${numResults}&apikey=${backupAPI_KEY}&countryCode=us&stateCode=${stateCode}&city=costa+mesa&radius=${radius}&unit=miles`);

        const data = await events_api_call.json();
        const eventsArr = data._embedded.events;
        console.log("eventsArr",eventsArr);
        this.setState({
            events: eventsArr
        })
    }
        componentDidMount() {
            this.getEvents();
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps) {
                this.getEvents();
            }
        }

        render() {
            return(
                <div className='row' style={topRowStyle}>
                                           
                    {/* <div className="panel panel-default">   
                        <div className="panel-body">
                            <img src="../tcktmstr.png" alt=""/>
                        </div>
                    </div> */}
    
                {this.state.events.map((elem, i) => {
                    return(
                        <div className="col-md-2">
                            <a href ={elem.url} target="_blank"><h5>{elem.name}</h5></a>
                            <h6>{elem.dates.start.localDate}</h6>
                            <h6>{elem._embedded.venues[0].name}</h6>
                        </div>
                            
                    )
                })}             
                   
                    <hr/>

                    

//                 </div> 
//         )
//     }
   
// } ;   
