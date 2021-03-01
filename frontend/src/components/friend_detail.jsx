import React from 'react';
import {Route} from 'react-router-dom';

class FriendDetail extends React.Component{

  constructor(props){
    super(props); 
    this.state = {
      friend: this.props.friend
    }
  }
  componentDidMount(){
    this.setState({friends: this.props.friends});
  }
  
  componentDidUpdate(prevProps){
    if (prevProps.match.params.friendId !== this.props.match.params.friendId){
      this.setState({friends: this.props.friends});
    }
  }

  render(){
    if(!this.props.friend){
      return null; 
    } 
    return (

      <section className="friend-detail">
        <figure>
          <img src={this.props.friend.imageUrl} alt={this.props.friend.name} />
        </figure>

        <ul>
          <li><h2>{this.props.friend.name}</h2></li>
          <li>City: {this.props.friend.city}</li>
          <li>Email: {this.props.friend.email}</li>
          <li>Occupation: {this.props.friend.occupation}</li>
          <li>Industry: {this.props.friend.industry}</li>
          <li>Education: {this.props.friend.education}</li>
          <li>About Me: {this.props.friend.aboutMe}</li>
          <li>LinkedIn: {this.props.friend.linkedIn}</li>
          <li>Recruiter: {this.props.friend.recruiterStatus}</li>
        </ul>

      </section>
    )
  }
}
export default FriendDetail;