import React from 'react';
import { Link } from 'react-router-dom';

class FriendIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li className="friend-index-item">
        <Link to={`/profile/connections/${this.props.friend._id}`}>
          <span>{this.props.friend.city}</span>
          <img src={this.props.friend.imageUrl}/>
          <span>{this.props.friend.name}</span>
        </Link>
      </li>
    )
  }
}

export default FriendIndexItem;