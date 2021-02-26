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
      return <div>
        NO MORE USERS TO DISPLAY
      </div>
    }
    if(this.props.user.education){
      return <ul>
                {this.props.user.education.map( school=>{
                  return <li>{school}</li>
                })}
              </ul>
    }
    console.log(this.props.user);
    return(
      <div id="profile">
        <div id="header">
          <div id="img">
            {/* <img src={this.props.user.image_url} /> */}
            <hr/>
            I<br />
            &emsp;M<br />
            &emsp;&emsp;A<br />
            &emsp;&emsp;&emsp;G<br />
            &emsp;&emsp;&emsp;&emsp;E<br />
            <hr/>
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