import React from "react";

class News extends React.Component {

    handleScrapeData() {
        fetch('/scrape')
            .then((response) => {
                console.log('I work!');
                console.log(response);
            })
            .catch(err => console.log(err));
    }

    render() {
        
        return (
            <div>
                <h1>News Component</h1>
                <hr/>
                <button onClick={this.handleScrapeData}>Scrape Me</button>
            </div>
            
        )
        
    }
    
} 
 

export default News;