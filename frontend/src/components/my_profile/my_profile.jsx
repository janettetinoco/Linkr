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
              <p>Education</p>
              {this.props.self.education}
            </div>

            <div className="details">
              <p>Occupation</p>
              {this.props.self.occupation}
            </div>

            <div className="details">
              <p>Industry</p>
              {this.props.self.industry}
            </div>
          </div>
          <div id="about-me">
            <h1>About Me</h1>
            {this.props.self.aboutMe}
          </div>

          <div >
            Links
            {this.props.self.linkedIn ? <Link to={this.props.self.linkedIn}><img id="linkedIn" src="https://img.icons8.com/color/48/000000/linkedin.png" /></Link> : ""}
          </div>
        </div>
      </div>
    )}
}

export default MyProfile;
