import React from "react";
import Chat from '../components/chat/Chat';
import News from '../components/News'
import Deals from '../components/Deals';
import Events from '../components/Events';
import Weather from '../components/Weather';
import axios from "axios";

const eventsStyle = {
    minHeight: "160px"
}

const selectStyle = {
    textAlign: "right"
}

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            value: '',
            dealsCity: 'tustin',
            dropDownText: 'Orange County'
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        event.preventDefault();


        this.setState({
            value: event.target.value,
            dropDownText: event.target.text
        })
        window.localStorage.setItem("city", event.target.value);
        const currentCity = window.localStorage.getItem("city") || "orange-county/"
        axios.get('/scrape/'+currentCity)
        .then(resp => {
            this.setState({articles: resp.data.data});
            // console.log('articles: ', this.state.articles)
        })
        .catch(err => {
            console.error(err);
        }) 

        const hyphenCity = window.localStorage.getItem("city") || "tustin"
        const spaceCity = hyphenCity.replace(/-/g, " ");
        this.setState({dropDownText: spaceCity});
        if (hyphenCity !== "Orange-County") {
            const plusCity = hyphenCity.replace(/-/g,"+");
            this.setState({dealsCity: plusCity});
        } else {
            this.setState({dealsCity: "tustin"})
        }
        
      }
      
    componentDidMount() {
        axios.get('/scrape/orange-county/')
        .then(resp => {
            this.setState({articles: resp.data.data});
        })
        .catch(err => {
            console.error(err);
        })     
        }



render(){
    return(
<div>
    <div className="row">
        <div className="col-md-6">
        <h4 className='weather__value'>{this.state.dropDownText} Events: </h4>
        </div>
            <div className="col-md-3">
                <h4 className='weather__key' style={selectStyle}>Select Your OC City!:</h4>
            </div>
            <div className="col-md-3">
                <form onSubmit={this.handleSubmit}>                 
                    <select className='form-control' value={this.state.value} onChange={this.handleChange}>
                        <option value="Orange-County" >Orange County, CA</option>
                        <option value="Aliso-Viejo" dealsloc='aliso+viejo+ca;radius=3'>Aliso Viejo</option>
                        <option value="Anaheim" dealsloc='anaheim+ca;radius=3'>Anaheim</option>
                        <option value='Brea' dealsloc='brea+ca;radius=3'>Brea</option>
                        <option value='Buena-Park' dealsloc='buena+park+ca;radius=3'>Buena Park</option>
                        <option value="Costa-Mesa" dealsloc='costa+mesa+ca;radius=3'>Costa Mesa</option>
                        <option value='Cypress' dealsloc='cypress+ca;radius=3'>Cypress</option>
                        <option value='Dana-Point' dealsloc='dana+point+ca;radius=3'>Dana Point</option>
                        <option value='Fountain-Valley' dealsloc='fountain+valley+ca;radius=3'>Fountain Valley</option>
                        <option value='Garden-Grove' dealsloc='garden+grove+ca;radius=3'>Garden Grove</option>
                        <option value="Huntington-Beach" dealsloc='huntington+beach+ca;radius=3'>Huntington Beach</option>
                        <option value='Irvine' dealsloc='irvine+ca;radius=3'>Irvine</option>
                        <option value='La-Habra' dealsloc='la+habra+ca;radius=3'>La Habra</option>
                        <option value='La-Palma' dealsloc='la+palma+ca;radius=3'>La Palma</option>
                        <option value='Laguna-Beach' dealsloc='laguna+beach+ca;radius=3'>Laguna Beach</option>
                        <option value='Laguna-Hills' dealsloc='laguna+hills+ca;radius=3'>Laguna Hills</option>
                        <option value='Laguna-Niguel' dealsloc='laguna+niguel+ca;radius=3'>Laguna Niguel</option>
                        <option value='Laguna-Woods' dealsloc='laguna+woods+ca;radius=3'>Laguna Woods</option>
                        <option value='Lake-Forest' dealsloc='lake+forest+ca;radius=3'>Lake Forest</option>
                        <option value='Los-Alamitos' dealsloc='los+alamitos+ca;radius=3'>Los Alamitos</option>
                        <option value='Mission-Viejo' dealsloc='mission+viejo+ca;radius=3'>Mission Viejo</option>
                        <option value="Newport-Beach" dealsloc='newport+beach+ca;radius=3'>Newport Beach</option>
                        <option value='Orange' dealsloc='orange+ca;radius=3'>Orange</option>
                        <option value='Placentia' dealsloc='placentia+ca;radius=3'>Placentia</option>
                        <option value='Rancho-Santa-Margarita' dealsloc='rancho+santa+margarita+ca;radius=3'>Rancho Santa Margarita</option>
                        <option value='San-Clemente' dealsloc='san+clemente+ca;radius=3'>San Clemente</option>
                        <option value='San-Juan-Capistrano' dealsloc='san+juan+capistrano+ca;radius=3'>San Juan Capistrano</option>
                        <option value='Santa-Ana' dealsloc='santa+ana+ca;radius=3'>Santa Ana</option>
                        <option value='Seal-Beach' dealsloc='seal+beach+ca;radius=3'>Seal Beach</option>
                        <option value='Stanton' dealsloc='stanton+ca;radius=3'>Stanton</option>
                        <option value='Tustin' dealsloc='tustin+ca;radius=3'>Tustin</option>
                        <option value='Villa-Park' dealsloc='villa+park+ca;radius=3'>Villa Park</option>
                        <option value='Westminster' dealsloc='westminster+ca;radius=3'>Westminster</option>
                        <option value='Yorba-Linda' dealsloc='yorba+linda+ca;radius=3'>Yorba Linda</option>
                </select>
            </form>
        </div>
    </div>
        <hr/>
    <div id="ticketmaster" className='row'>
        <div className='col-md-12' style={eventsStyle} >
            <Events dropDownText={this.state.dropDownText} city={this.state.dealsCity}/>
        </div>
    </div>
    <hr class="hr-xs"/>

    <div className='row'>
        <div id="deals" className='col-md-2'>
            <Deals dropDownText={this.state.dropDownText} city={this.state.dealsCity}/>
        </div>
        <div className='col-md-7'>
            <News dropDownText={this.state.dropDownText} articles={this.state.articles}/>
        
        </div>
        <div className='col-md-3'>
        <div className='row'>
                <div className='col-md-12'>
                    <Weather dropDownText={this.state.dropDownText} city={this.state.dealsCity} />
                    
                </div>
            </div> 
            <div className='row'>
                <div className='col-md-12 fixed-to-bottom'>               
                    <Chat />
                </div>
            </div>               
        </div>    
        
    </div>
</div>
    )
}   
}