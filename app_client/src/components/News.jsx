import React from "react";

const titleStyle = {
    textAlign: "center"
}

const fixHeight = {
    minHeight: "115px"
}

class News extends React.Component {

    render() {        
        return (
        <div>
            <div className='panel panel-default'id='banner-news' style={fixHeight}>
                <div className='panel-body'>
                    <h2 style={titleStyle} className='weather__value'>{this.props.dropDownText} News</h2>
                </div>
            </div>                  
               
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