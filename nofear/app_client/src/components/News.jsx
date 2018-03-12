import React from "react";

class News extends React.Component {

    handleScrapeData(){
        fetch('scrape')
          .then((response) => {
            console.log('I work in react');
            response.json().then(function(data) {
              console.log(data);
            });
          })
          .catch(err => console.log(err));
      }

      constructor(props) {
        super(props);
        this.state = {
            title:'',
            description:'',
            link:'',
            note:''
        }

        // This binding is necessary to make `this` work in the callback
        this.handleScrapeData = this.handleScrapeData.bind(this);

    render() {
        
        return (
            <div>
                <h1>News Component 3/11/18</h1>
                <hr/>
                <button onClick={this.handleScrapeData}>Scrape Me</button>
            </div>
            
        )
        
    }
    
} 
 

export default News;