import React from "react";
import axios from "axios";
// import CitiesDropDown from "./CitiesDropDown"

class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    
      handleSubmit(event) {
        alert('Now scraping: ' + this.state.value);
        event.preventDefault();
      }
    
     
 
    componentDidMount() {
        // const currentCity = window.localStorage.getItem("city") || 'orange';
        axios.get('/scrape/orange')
        .then(resp => {
            console.log('resp.data: ', resp.data)
            this.setState({articles: resp.data.data});
            console.log('articles: ', this.state.articles)
        })
        .catch(err => {
            console.error(err);
        })     
        }

    render() {        
        return (
            <div>
            <form onSubmit={this.handleSubmit}>                 
              <select className='form-control' value={this.state.value} onChange={this.handleChange}>
                <option value="orange">Pick Another City</option>
                <option value="costa-mesa">Costa Mesa</option>
                <option value="huntington-beach">Huntington Beach</option>
                <option value="newport-beach">Newport Beach</option>
              </select>
            </form>
               
                <hr/>
                {this.state.articles.map((elem, i) => {
                    return(
                        <div key={i}>            
                            <h3>{elem.title}</h3>
                            <a href ={elem.link} target="_blank">Link to Story</a>
                            <h4>{elem.date}</h4>
                        </div>
                    )
                })}
            </div>            
        )        
    }    
} 
 

export default News;