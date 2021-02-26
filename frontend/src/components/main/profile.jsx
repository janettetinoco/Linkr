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
          <h1 id="user-name">{this.props.user.name}</h1>
          <h1 id="user-location"><img src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png" />{this.props.user.city}</h1>
          <span></span>
        </div>
        <div id="body">
          <div id="stats">

            <div className="details">
              <p><img src="https://img.icons8.com/cotton/64/000000/graduation-cap--v2.png" />Education</p>
              {this.props.user.education}
            </div>

            <div className="details">
              <p><img src="https://img.icons8.com/cotton/64/000000/briefcase--v1.png" />Occupation</p>
              {this.props.user.occupation}
            </div>

            <div className="details">
              <p><img src="https://img.icons8.com/cotton/64/000000/company.png" />Industry</p>
              {this.props.user.industry}
            </div>
            <div className="details">
              <p><img src="https://img.icons8.com/cotton/64/000000/name--v2.png" />About Me</p>
              {this.props.user.aboutMe}
            </div>
          </div>

          <div id="details">
            {/* <Link to={this.props.user.linkedIn}>linkedIn</Link> */}
            <p>Links</p>
            {this.props.user.linkedIn ? <Link to={this.props.user.linkedIn}><img id="linkedIn" src="https://img.icons8.com/color/48/000000/linkedin.png" /></Link> : ""}
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;