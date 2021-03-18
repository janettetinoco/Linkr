import React from 'react';
// import config from './config';
import io from 'socket.io-client';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import BottomBar from './BottomBar';
import MyBottomBar from './my_bottom_bar';


class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chat: [],
      content: '',
      name: '',
    };

    this.toggleChat = this.toggleChat.bind(this)

  }

  componentDidMount() {
    // this.socket = io(config[process.env.NODE_ENV].endpoint);
    this.socket = io();

    // Load the last 10 messages in the window.
    this.socket.on('init', (msg) => {
      let msgReversed = msg.reverse();
      this.setState((state) => ({
        chat: [...state.chat, ...msgReversed],
      }), this.scrollToBottom);
    });

    // Update the chat if a new message is broadcasted.
    this.socket.on('push', (msg) => {
      this.setState((state) => ({
        chat: [...state.chat, msg],
      }), this.scrollToBottom);
    });
  }

  // Save the message the user is typing in the input field.
  handleContent(event) {
    this.setState({
      content: event.target.value,
    });
  }

  //
  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleSubmit(event) {
    // Prevent the form to reload the current page.
    event.preventDefault();

    // Send the new message to the server.
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

  // Always make sure the window is scrolled down to the last message.
  scrollToBottom() {
    const chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight;
  }

  toggleChat(e){
    // debugger
    if (e.currentTarget.children[0].innerText === "Open Chat"){
      e.currentTarget.children[0].innerText = "Close Chat"
      document.getElementsByClassName('chat-container')[0].classList.add('open')
      document.getElementById('chat').classList.add('go')
      // e.currentTarget.style.boxShadow = 'inset black 0px 2px 3px 0px'
      e.currentTarget.classList.add('on')
    } else {
      e.currentTarget.children[0].innerText = "Open Chat"
      document.getElementsByClassName('chat-container')[0].classList.remove('open')
      document.getElementById('chat').classList.remove('go')
      e.currentTarget.classList.remove('on')
    }

  }

  render() {
    return (
      <div>
        <div className="chat-container">
          <div id="chat">
            {this.state.chat.map((el, index) => {
              return (
                <div key={index} className='msg'>
                  <Typography variant="caption" className="name">
                    {el.name}
                  </Typography>
                  <Typography variant="body1" className="content">
                    {el.content}
                  </Typography>
                </div>
              );
            })}
          </div>
          <MyBottomBar 
            content={this.state.content}
            handleContent={this.handleContent.bind(this)}
            handleName={this.handleName.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
            name={this.state.name}
          />
        </div>
        <div className='o-chat' onClick={this.toggleChat}>
          <h1>Open Chat</h1>
        </div>
      </div>
    );
  }
};

export default Chat;