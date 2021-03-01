import React from 'react';
import {Route, Switch} from 'react-router-dom';
import FriendDetailContainer from './friend_detail_container'; 
import FriendIndexItem from './friend_index_item'; 

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

  render(){
    return(

      <section className="connections">
        <Switch>
          <Route path="profile/connections" component={FriendDetailContainer} />
          <Route path="profile/connections/:friendId" component={FriendDetailContainer} />
        </Switch>
        <ul id="friend-index">
          {this.props.friends.map( (friend, i)=>{
            return <FriendIndexItem key={i} friend={friend} />
          })}
        </ul>
      </section>
    )

  }
}

export default Connections; 

// [img] Michael noble  student
