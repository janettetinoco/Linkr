import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
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
  componentDidMount(){
    if(this.props.friends){
      if(this.props.friends.length>0){

        this.props.history.push(`/profile/connections/${this.props.friends[0]._id}`)
      }
    }
  }

  loadFriends(){
    this.props.getConnections(this.props.myId);
    this.props.getConnectionsAsUsers(this.props.myId)
    .then( ()=>{this.setState({loadingFriends: false, friends: this.props.friends})})
  }

  render(){

    if(!this.props.friends){
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
