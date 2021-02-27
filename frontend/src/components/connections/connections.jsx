import React from 'react';

class Connections extends React.Component{
  constructor(props){
    super(props);
    
    this.loadFriends();
    this.state={
      friends: [],
      loadingFriends: true, 
    }
    this.loadFriends = this.loadFriends.bind(this); 
  }

  loadFriends(){
    this.props.getConnections(this.props.myId);
    this.props.getConnectionsAsUsers(this.props.myId)
    .then( ()=>{this.setState({loadingFriends: false, friends: this.props.friends})})
  }
  componentWillUpdate(){
    if(!this.props.friends){
    }
  }
  componentWillMount(){
  }
  componentDidMount(){
  }

 
  render(){
    let connectionList = <h2>You have no connections</h2>; 
    let connectionListTable = '';
    console.log("in render", this.state.friends);
    if(this.state.friends){

        
        connectionListTable = this.state.friends.map( (connection, i) => {
          return (
            <tr className="connections-row">
       
            <td><img className="user-icon" src={connection.imageUrl} /></td>
            <td><div className="connection-details">{connection.name}</div></td>
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
