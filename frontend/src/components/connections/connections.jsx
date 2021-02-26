import React from 'react';

class Connections extends React.Component{
  constructor(props){
    super(props);

    this.state={
      connections: this.props.connections
    }
  }
  
  componentWillMount(){
    this.props.getConnections(this.props.myId); 
  }
  componentDidMount(){
    this.forceUpdate();
  }

 
  render(){
    let connectionList = <h2>You have no connections</h2>; 

    if(this.state.connections){
      connectionList = this.state.connections.map( (connection, i) => {
            console.log(connection);
            return(
              <li className="connection-summary" key={i}>
            <img src={connection.imageUrl} />
            <span id="connection-name"> {connection.name} </span>
          </li>
          )
          })
    }
   
    
    return(
      <div id="connections-page">

        <h1> Your Connections </h1>
        <ul id="connections-list">
            {connectionList}
        </ul>
      </div>
    )

  }
}

export default Connections; 