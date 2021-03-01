import React from 'react';
import {Route} from 'react-router-dom';
import FriendDetailContainer from './friend_detail_container'; 
import FriendIndexItem from './friend_index_item'; 
import SalarWalkout from '../../background_images/salar_walkout.png';
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
      <div id="connections-outer-div">
        {/* <hr id="top-hr" /> */}
      <div id="connection-div">
        <section className="connections">
        {/* <img id="background" src={SalarWalkout} /> */}

        <Route path="profile/connections/:friendId" component={FriendDetailContainer} />
        <ul id="friend-index">
          {this.props.friends.map( (friend, i)=>{
            return <FriendIndexItem key={i} friend={friend} />
          })}
        </ul>

      </section>
      </div>
      </div>
    )

  }
}

export default Connections; 

// [img] Michael noble  student
