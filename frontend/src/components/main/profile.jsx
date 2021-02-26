import React from 'react';
import {Link} from 'react-router-dom'; 

class Profile extends React.Component{

  constructor(props){
    super(props);
    this.state=this.props.user;
    console.log(this.props.user);
  }
  render(){
    if(!this.props.user){
      return <div id="no-more-users">
        NO MORE USERS TO DISPLAY
      </div>
    }
    return(
      <div className="profile">
        <div id="profile-main-info">
          <div className="image-container">
            <img id="profile-img"src={this.props.user.imageUrl} />
          </div>
          name
          <h1>{this.props.user.name}</h1>
          <span>{this.props.user.city}</span>
          <span></span>
        </div>
        <div id="body">
          <div id="stats">

            <div className="details">
              <p>Education</p>
              {this.props.user.education}
            </div>

            <div className="details">
              <p>Occupation</p>
              {this.props.user.occupation}
            </div>

            <div className="details">
              <p>Industry</p>
              {this.props.user.industry}
            </div>
          </div>
          <div id="about-me">
            {this.props.user.aboutMe}
          </div>

          <div id="linkedIn">
            <Link to={this.props.user.linkedIn}>linkedIn</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;