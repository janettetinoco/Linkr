
import React from 'react';
import io from 'socket.io-client';
const P2P = require('socket.io-p2p');


class PeerChat extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      chat: [],
      content: '',
      name: '',
      friends: this.props.friends,
    };

    this.handleContent = this.handleContent.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getConnections(this.props.selfId);
    this.props.getConnectionsAsUsers(this.props.selfId)


    this.socket = io();
    const p2p = new P2P(this.socket)

    p2p.on('ready', function(){
      p2p.usePeerConnection = true;
      p2p.emit('peer-obj', { selfId: "60538404cce8fe1ef8db3af1"})
      // p2p.emit('peer-obj', console.log('hello'))
    })

    p2p.on('peer-msg', function(data){
      console.log(data)
    })
  }

  handleContent(e) {
    this.setState({
      content: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault()

    this.socket.emit('message', {
      name: this.state.name,
      content: this.state.content,
    });

    this.setState((state) => {
      // Update the chat with the user's message and remove the current message.
      return {
        chat: [...state.chat, {
          name: state.name,
          content: state.content,
        }],
        content: '',
      };
    }, this.scrollToBottom);
  }

  scrollToBottom() {
    const chat = document.getElementById('p2p');
    chat.scrollTop = chat.scrollHeight;
  }

  

  render(){
    return(
      <div className='theP2P'>
        <div id='p2p'>
        {this.state.chat.map((el, index) => {
              return (
                <div key={index} className='msg'>
                  <div className="p2p-name">
                    {el.name}
                  </div>
                  <div className="p2p-content">
                    {el.content}
                  </div>
                </div>
              );
            })}
        </div>

        <div className="p2p-message">
          <form onSubmit={this.handleSubmit}>
            <input 
              type='text'
              onChange={this.handleContent}
              value={this.content}
              placeholder="Type your message..."
            />
          </form>
        </div>  
      </div>
    )
  }
}

export default PeerChat;