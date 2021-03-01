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
      return(
        <div className="profile-container-no-users">
          <div className="card">
            <h1>Check back later for more users to follow!</h1>
          </div>
        </div>
      )
    }
    return(
        <div className="profile-container">
          <div className="card">
            <div id="profile-main-info">
              <div className="user-image-container">
                <img id="profile-img"src={this.props.user.imageUrl} />
              </div>
              <h1 id="user-name">{this.props.user.name}</h1>
              <h1 id="user-location"><img src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png" />{this.props.user.city}</h1>
              <span></span>
            </div>
            <div id="body">
              <div id="stats">

                <div className="details">
                  <p id="label"><img src="https://img.icons8.com/cotton/64/000000/graduation-cap--v2.png" />Education</p>
                  <p>{this.props.user.education}</p>
                </div>

                <div className="details">
                  <p id="label"><img src="https://img.icons8.com/cotton/64/000000/briefcase--v1.png" />Occupation</p>
                  <p>{this.props.user.occupation}</p>
                </div>

                <div className="details">
                  <p id="label"><img src="https://img.icons8.com/cotton/64/000000/company.png" />Industry</p>
                  <p>{this.props.user.industry}</p>
                </div>
                <div className="details">
                  <p id="label"><img src="https://img.icons8.com/cotton/64/000000/name--v2.png" />About Me</p>
                  <p>{this.props.user.aboutMe}</p>
                </div>
                <div className="details">
                  <p id="label-links"><img src="https://img.icons8.com/cotton/64/000000/external-link.png" />Links</p>
                  <p>{this.props.user.linkedIn ? <Link to={this.props.user.linkedIn}><img id="linkedIn" src="https://img.icons8.com/color/48/000000/linkedin.png" /></Link> : ""}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Profile;