import React, { Component } from "react";
import io from "socket.io-client";
const titleStyle = {
    textAlign: "center"
}

class Chat extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            username: '',
            message:'',
            messages: []        };
    
    this.socket = io('http://localhost:3000');

    this.socket.on('RECEIVE_MESSAGE', function(data){
        addMessage(data);
    });

    const addMessage = data => {
        console.log(data);
        this.setState({messages: [...this.state.messages, data]});
        console.log(this.state.messages);
    };

    this.sendMessage = ev => {
        ev.preventDefault();
        this.socket.emit('SEND_MESSAGE', {
            author: this.state.username,
            message: this.state.message
        })
        this.setState({message: ''});

    }
}

render(){
    return (

                    <div className="panel panel-default">                    
                        <div className="panel-body">
                            <h2 className='weather__value' style={titleStyle}>OC Chat</h2>
                            <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>                            
                            <textarea type='text' placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                            <button onClick={this.sendMessage} className="btn form-control">Send</button>
                            <hr/>
                            <div className="messages">
                    
                                {this.state.messages === null ? <div></div> : 
                                    this.state.messages.map(message => {
                                    return (
                                        <div>{message.author}:   {message.message}</div>
                                    )
                                })}
                            </div>
                    </div>
                </div>
    );
}
}

export default Chat;

