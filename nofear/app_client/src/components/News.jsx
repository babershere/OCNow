import React from "react";

const titleStyle = {
    textAlign: "center"
}

class News extends React.Component {

    render() {        
        return (
        <div>
            <div className='panel panel-default'>
                <div className='panel-body'>
                    <h1 style={titleStyle} className='weather__value'>{this.props.dropDownText} News</h1>
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