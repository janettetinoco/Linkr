import React from 'react';

class Connections extends React.Component{
  constructor(props){
    super(props);

    this.state={
      connectionsAsUsers: this.props.connectionsAsUsers
    }
  }
  componentWillUpdate(){

  }
  componentWillMount(){
    this.props.getConnections(this.props.myId); 
    this.props.getConnectionsAsUsers(this.props.myId); 
    this.props.getConnectionsAsUsers(this.props.myId); 
  }
  componentDidMount(){
    this.props.getConnections(this.props.myId); 
    this.props.getConnectionsAsUsers(this.props.myId); 
    this.forceUpdate();
  }

 
  render(){
    let connectionList = <h2>You have no connections</h2>; 
    let connectionListTable = '';
    if(this.state.connectionsAsUsers){
      // connectionList = this.state.connectionsAsUsers.map( (connection, i) => {

      //       return(

      //       <li className="connection-summary" key={i}>
      //         <img className="user-icon" src={connection.imageUrl} />
      //         <div className="connection-details"> {connection.name} </div>
      //         <div className="connection-details">{connection.industry}</div>
      //       </li>
      //     )
      //   })
        
        connectionListTable = this.state.connectionsAsUsers.map( (connection, i) => {
          return (
            <tr className="connections-row">
       
            <td><img className="user-icon" src={connection.imageUrl} /></td>
            <td><div className="connection-details"> {connection.name} </div></td>
            <td><div className="connection-details">{connection.industry}</div></td>
          </tr>
   
        )
      })
    }
   
    
    return(
      <div id="connections-page">

        <table id="connections-table">
        <h1> Your Connections </h1>
          {connectionListTable}
      </table>
        {/* <ul id="connections-list">
            {connectionList}
        </ul> */}

      </div>
    )

  }
}

export default Connections; 

// [img] Michael noble  student
