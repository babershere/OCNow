import React from "react";

// import CitiesDropDown from "./CitiesDropDown"

class News extends React.Component {

    render() {        
        return (
            <div>
            <h2 className='weather__value'>{this.props.dropDownText} News:</h2>
               
                <hr/>
                {this.props.articles.map((elem, i) => {
                    return(
                        <div key={i}>       
                            <a href ={elem.link} target="_blank"><h3>{elem.title}</h3></a>
                            <h4>{elem.date}</h4>
                            <hr/>
                        </div>
                    )
                })}
            </div>            
        )        
    }    
} 
 

export default News;