import React from "react";

// import CitiesDropDown from "./CitiesDropDown"

class News extends React.Component {

    render() {        
        return (
            <div>
            <h3>News:</h3>
               
                <hr/>
                {this.props.articles.map((elem, i) => {
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