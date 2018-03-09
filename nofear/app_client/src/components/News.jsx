import React from "react";
import scraper from '../helpers/OCRegScraper.js'

class News extends React.Component {

    render() {
        scraper.OCRegScraper();
        return (
            <h1>News Component</h1>
        )
        
    }
    

} 

    

export default News;