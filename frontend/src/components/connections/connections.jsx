import React from 'react';
import {Route, Link} from 'react-router-dom';
import FriendDetailContainer from './friend_detail_container'; 
import FriendIndexItem from './friend_index_item'; 


class Connections extends React.Component{
  constructor(props){
    super(props);
    
    this.loadFriends();
    this.state={
      friends: this.props.friends,
      loadingFriends: true, 
    }
    this.loadFriends = this.loadFriends.bind(this); 
  }
  componentDidMount(){
    if(this.props.friends){
      if(this.props.friends.length>0){
        this.props.history.push(`/profile/connections/${this.state.friends[0]._id}`);
      }
    }
  }
  componentDidUpdate(){
    if(!this.state.loadingFriends){
      if(this.props.friends){
        if(this.props.history.location.pathname==='/profile/connections'){
          if(this.props.friends.length>0){
            this.props.history.push(`/profile/connections/${this.state.friends[0]._id}`);
          }
        }
      }
    }
  }

  loadFriends(){
    this.props.getConnections(this.props.myId);
    this.props.getConnectionsAsUsers(this.props.myId)
    .then( ()=>{
      this.setState({loadingFriends: false, friends: this.props.friends});
      if(this.state.friends[0]){
        this.props.history.push(`/profile/connections/${this.state.friends[0]._id}`);
      }
    })
  }

  render(){

    if(!this.props.friends){
      this.loadFriends();
      return (
        <section className="connections">
          <h1 id="connections-message">Loading your connections! </h1>
        </section>
      )
    }else{
      if(!this.props.friends.length){
        return (
          <section className="connections">
            <h1 id="connections-message">Keep swiping to make more connections! <Link to="/">Return Home</Link></h1>
          </section>
        )
      }
    }
    return(
      <section className="connections">
        <div id="connections-title-wrapper"><div id="connections-title">Your Connections</div></div>
        <Route path="/profile/connections/:friendId" component={FriendDetailContainer} />



          {/* <div id="connections-list-title">Your friends</div> */}
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
