import React from 'react';
import { Link } from 'react-router-dom';

class FriendIndexItem extends React.Component{

  render(){
    return(
      <li className="friend-index-item">
        <Link to={`/profile/connections/${this.props.friend._id}`}>
          <img alt="friend" src={this.props.friend.imageUrl}/>
        </Link>
      </li>
    )
  }
}

export default FriendIndexItem;