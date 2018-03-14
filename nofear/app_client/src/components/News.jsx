import React from "react";
import axios from "axios";

class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
      }

    componentDidMount() {
        axios.get('/scrape')
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
                <h3>News Component</h3>
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