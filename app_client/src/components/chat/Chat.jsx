import React, { Component } from "react";
import io from "socket.io-client";
import { Panel, Row, Col } from 'react-bootstrap';

const titleStyle = {
    textAlign: "center"
}

const makeSticky = {
    position: 'fixed',
    bottom: 0,
    right: 5
}

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: [],
            open: false
        };

        this.socket = io('https://ocnow.herokuapp.com/');

        this.socket.on('RECEIVE_MESSAGE', function (data) {
            addMessage(data);
        });

        const addMessage = data => {
            this.setState({ messages: [...this.state.messages, data] });
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({ message: '' });

        }
    }

    render() {
        return (

            <Panel id="collapsible-panel-example-3" style={makeSticky}>

                <Panel.Collapse>
                    <Panel.Body>

                        <div className="messages">
                            {this.state.messages === null ? <div></div> :
                                this.state.messages.map((message, i) => {
                                    return (
                                        <div key={i}>{message.author}:   {message.message}</div>
                                    )
                                })}
                        </div>

                        <hr />
                        <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({ username: ev.target.value })} className="form-control" />
                        <textarea type='text' placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} />
                        <button onClick={this.sendMessage} className="btn btn-default form-control">Send</button>



                    </Panel.Body>
                </Panel.Collapse>
                <Panel.Heading>
                    <Panel.Title>
                        <Row>
                            <Col md={2}><Panel.Toggle componentClass="a"><span className="glyphicon glyphicon-chevron-up"></span></Panel.Toggle></Col>
                            <Col md={10}><h4 className='weather__value' style={titleStyle}>OC Chat</h4></Col>
                        </Row>


                    </Panel.Title>

                </Panel.Heading>
            </Panel>
        );
    }
}

export default Chat;




// import React, { Component } from "react";
// import io from "socket.io-client";
// import { Panel, Row, Col } from 'react-bootstrap';

// const titleStyle = {
//     textAlign: "center"
// }

// const makeSticky = {
//     position: 'fixed',
//     bottom: 0,
//     right: 50,
//     minWidth: 200
// }

// class Chat extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             username: '',
//             message: '',
//             messages: [],
//             open: false
//         };

//         this.socket = io('http://127.0.0.1:3000/home');

//         this.socket.on('RECEIVE_MESSAGE', function (data) {
//             addMessage(data);
//         });

//         const addMessage = data => {
//             console.log(data);
//             this.setState({ messages: [...this.state.messages, data] });
//             console.log(this.state.messages);
//         };

//         this.sendMessage = ev => {
//             ev.preventDefault();
//             this.socket.emit('SEND_MESSAGE', {
//                 author: this.state.username,
//                 message: this.state.message
//             })
//             this.setState({ message: '' });

//         }
//     }

//     render() {
//         return (

//             <Panel id="collapsible-panel-example-3" style={makeSticky}>

//                 <Panel.Collapse>
//                     <Panel.Body>

//                         <div className="messages">
//                             {this.state.messages === null ? <div></div> :
//                                 this.state.messages.map(message => {
//                                     return (
//                                         <div>{message.author}:   {message.message}</div>
//                                     )
//                                 })}
//                         </div>

//                         <br />
//                         <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({ username: ev.target.value })} className="form-control" />
//                         <textarea type='text' placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} />
//                         <button onClick={this.sendMessage} className="btn btn-default form-control">Send</button>

//                     </Panel.Body>
//                 </Panel.Collapse>
//                 <Panel.Heading>
//                     <Panel.Title>
//                         <Row>
//                             <Col md={2}><Panel.Toggle componentClass="a"><span className="glyphicon glyphicon-chevron-up"></span></Panel.Toggle></Col>
//                             <Col md={10}><h4 className='weather__value' style={titleStyle}>OC Chat</h4></Col>
//                         </Row>
//                     </Panel.Title>
//                 </Panel.Heading>
//             </Panel>
//         );
//     }
// }

// export default Chat;