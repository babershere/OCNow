// import React from "react";
// // import Events from "react"; 


// const TKMS_API_Key = 'xq6Lj8IehMI2JOJJKOBUTsA89Cjanh6n';

// export default class Events extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             name: undefined,
//             link: undefined,
//             date: undefined,
//             venue: undefined,
//             image: undefined
//         }
//         this.getEvent = this.getEvent.bind(this);
//       } 
        
//     getEvent= async () => {
//         const tkms_api_call = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=xq6Lj8IehMI2JOJJKOBUTsA89Cjanh6n"`);

//         const data = await tkms_api_call.json();
//         // const weatherArr = data.deals;
//         this.setState({
//             name: undefined,
//             link: undefined,
//             date: undefined,
//             venue: undefined,
//             image: undefined
//         })
//         console.log("data: ", data);
//     }

//         componentDidMount() {
//             this.getEvents();
//         }

//         componentWillReceiveProps(nextProps) {
//             if (nextProps) {
//                 this.getEvents();
//             }
//         }

//         render() {
//             return(
//                 <div>
//                 <h4>{this.state.cityjson} Venue: </h4>
//                 <h5>City: {this.state.temp} F</h5>
//                 <h5>Current Condition: {this.state.cond}</h5>
//                 <h6>Humidity: {this.state.humidity}%</h6>
//                 <h6>High: {this.state.high} F</h6>
//                 <h6>Low: {this.state.low} F</h6>                
                   
//                     <hr/>
                    

//                 </div> 
//         )
//     }
   
// }    
