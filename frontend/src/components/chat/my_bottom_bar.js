import React from 'react';



// const useStyles = makeStyles(theme => ({
//   appBar: {
//     bottom: 0,
//     top: 'auto',
//   },
//   inputContainer: {
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     borderRadius: theme.shape.borderRadius,
//     marginLeft: theme.spacing(1),
//     position: 'relative',
//     width: '100%',
//   },
//   icon: {
//     width: theme.spacing(7),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 7),
//     width: '100%',
//   },
// }));

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
