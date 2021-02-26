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
      <div id="profile" >
        <button onClick={this.props.handleEditButton}>Edit Profile</button>
        <div id="header">
          <div id="img">
            <img src={this.props.self.imageUrl} />
            <hr/>
          </div>
          Name
          <h1>{this.props.self.name}</h1>
          <span>{this.props.self.city}</span>
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
            {this.props.self.aboutMe}
          </div>

          <div id="linkedIn">
            {this.props.self.linkedIn ? <Link to={this.props.self.linkedIn}>linkedIn</Link> : ""}
          </div>
        </div>
      </div>
    )}
}

export default MyProfile;
