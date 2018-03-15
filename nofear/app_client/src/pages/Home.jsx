import React from "react";
import Chat from '../components/Chat';
import News from '../components/News'
import Deals from '../components/Deals';
import Events from '../components/Events';
// import Weather from '../components/Weather';
import axios from "axios";
// import CitiesDropDown from '../components/CitiesDropDown';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        event.preventDefault();
        this.setState({value: event.target.value})
        window.localStorage.setItem("city", event.target.value);
        console.log('city', event.target.value)
        const currentCity = window.localStorage.getItem("city") || "orange"
        axios.get('/scrape/'+currentCity)
        .then(resp => {
            console.log('resp.data: ', resp.data)
            this.setState({articles: resp.data.data});
            console.log('articles: ', this.state.articles)
        })
        .catch(err => {
            console.error(err);
        }) 
      }
    
    //   handleSubmit(event) {
    //     alert('Now scraping: ' + this.state.value);
    //     event.preventDefault();
    //   }
    
     
 
    componentDidMount() {
        // const currentCity = window.localStorage.getItem("city") || 'orange';
        axios.get('/scrape/orange-county/')
        .then(resp => {
            // console.log('resp.data: ', resp.data)
            this.setState({articles: resp.data.data});
            // console.log('articles: ', this.state.articles)
        })
        .catch(err => {
            console.error(err);
        })     
        }


render(){
    return(
<div>
    <div className='row'>
        <div className='col-md-9'>
            <Events/>
        </div>
        <div className='col-md-3'>
        <h4>Select Your OC City:</h4>
        <form onSubmit={this.handleSubmit}>                 
              <select className='form-control' value={this.state.value} onChange={this.handleChange}>
                <option value="orange-county/">Orange County, CA</option>
                <option value="aliso-viejo">Aliso Viejo</option>
                <option value="anaheim">Anaheim</option>
                <option value='brea'>Brea</option>
                <option value='buena-park'>Buena Park</option>
                <option value="costa-mesa">Costa Mesa</option>
                <option value='cypress'>Cypress</option>
                <option value='dana-point'>Dana Point</option>
                <option value='fountain-valley'>Fountain Valley</option>
                <option value='garden-grove'>Garden Grove</option>
                <option value="huntington-beach">Huntington Beach</option>
                <option value='irvine'>Irvine</option>
                <option value='la-habra'>La Habra</option>
                <option value='la-palma'>La Palma</option>
                <option value='laguna-beach'>Laguna Beach</option>
                <option value='laguna-hills'>Laguna Hills</option>
                <option value='laguna-niguel'>Laguna Niguel</option>
                <option value='laguna-woods'>Laguna Woods</option>
                <option value='lake-forest'>Lake Forest</option>
                <option value='los-alamitos'>Los Alamitos</option>
                <option value='mission-viejo'>Mission Viejo</option>
                <option value="newport-beach">Newport Beach</option>
                <option value='orange'>Orange</option>
                <option value='placentia'>Placentia</option>
                <option value='rancho-santa-margarita'>Rancho Santa Margarita</option>
              <option value='san-clemente'>San Clemente</option>
              <option value='san-juan-capistrano'>San Juan Capistrano</option>
              <option value='santa-ana'>Santa Ana</option>
              <option value='seal-beach'>Seal Beach</option>
              <option value='stanton'>Stanton</option>
              <option value='tustin'>Tustin</option>
              <option value='villa-park'>Villa Park</option>
              <option value='westminster'>Westminster</option>
              <option value='yorba-linda'>Yorba Linda</option>
              </select>
            </form>
            {/* <Weather/> */}
        </div>
    </div>
    <hr/>

    <div className='row'>
        <div className='col-md-2'>
            <Deals/>
        </div>
        <div className='col-md-7'>
            <News articles={this.state.articles}/>
        
        </div>
        <div className='col-md-3'>
            <div className='row'>
                <div className='col-md-12'>
                    <Chat />
                </div>
            </div>               
        </div>
    </div>
</div>
    )
}   
}
