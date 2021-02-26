import React from 'react';
import {Link} from 'react-router-dom'

class MyProfile extends React.Component{

  handleEditButton(){
  }

  componentDidMount(){
    this.props.getSelf(this.props.myId)
  }

  render(){
    if(!this.props.self){
      return null;
    }
    return(
      <div class="myProfile" >
        <div id="profile-main-info">
          <div className="image-container">
            <img id="profile-img" src={this.props.self.imageUrl} />
          </div>
          <h1 id="user-name">{this.props.self.name}</h1>
          <h1 id="user-location"><img src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png" />{this.props.self.city}</h1>
          <button onClick={this.props.handleEditButton}><img src="https://img.icons8.com/ultraviolet/40/000000/edit.png" />Edit Profile</button>
          <span></span>
        </div>
        <div id="body">
          <div id="stats">

            <div className="details">
              <p><img src="https://img.icons8.com/cotton/64/000000/graduation-cap--v2.png" />Education</p>
              {this.props.self.education}
            </div>

            <div className="details">
              <p><img src="https://img.icons8.com/cotton/64/000000/briefcase--v1.png" />Occupation</p>
              {this.props.self.occupation}
            </div>

            <div className="details">
              <p><img src="https://img.icons8.com/cotton/64/000000/company.png" />Industry</p>
              {this.props.self.industry}
            </div>
            <div className="details">
              <p><img src="https://img.icons8.com/cotton/64/000000/name--v2.png" />About Me</p>
              {this.props.self.aboutMe}
            </div>
            <div className="details">
              <p><img src="https://img.icons8.com/cotton/64/000000/external-link.png" />Links</p>
              {this.props.self.linkedIn ? <Link to={this.props.self.linkedIn}><img id="linkedIn" src="https://img.icons8.com/color/48/000000/linkedin.png" /></Link> : ""}
            </div>
          </div>

        </div>
      </div>
    )}
}

export default MyProfile;
