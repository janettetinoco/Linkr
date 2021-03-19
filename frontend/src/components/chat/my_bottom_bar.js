import React from 'react';


export default function MyBottomBar(props) {


  return (
    <div className='bottom-container'>
      <div className='chat-name'>
        <input 
          type='text'
          onChange={props.handleName}
          value={props.name}
          placeholder="Name"
        />
      </div>
      <div>
        <div className="chat-message">
          <form onSubmit={props.handleSubmit}>
            <input 
              type='text'
              onChange={props.handleContent}
              value={props.content}
              placeholder="Type your message..."
            />
          </form>
        </div>  
      </div>
    </div>
  );
}
