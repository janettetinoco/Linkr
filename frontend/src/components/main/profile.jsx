import React from 'react';
import {Link} from 'react-router-dom'; 

class Profile extends React.Component{

  constructor(props){
    super(props);
    this.state=this.props.user;
  }
  render(){
    if(!this.props.user){
      let button = document.getElementById("swipe");
      // 
      if(button){
        button.classList.add('disappear');
      }
      return(
        <div className="profile-container-no-users">
          <div className="card">
            <h1>Check back later for more users to follow!</h1>
          </div>
        </div>
      )
    }else{
      let button = document.getElementById("swipe");
      // 
      if(button){
        button.classList.remove('disappear');
      }
      return(
          <div className='profile-container'>
            <div className='card'>
              <div className="flip-card-front">
                <div className='image-container'>
                  <img alt="profile" id='img-main' src={this.props.user.imageUrl} />
                </div>
                <div className='user-details-name'>
                  <h1>{this.props.user.name}</h1>
                </div>
                <div className='user-details'>
                  <div className='user-info loc' >
                    <img alt="profile" className='user-icon' src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png" />
                    <p>{this.props.user.city}</p>
                  </div>
                </div>
                <div className='user-details'>
                  <div className='details-desc'>
                    <p className='user-info' >Education</p>
                    <img alt="profile" className='user-icon' src="https://img.icons8.com/cotton/64/000000/graduation-cap--v2.png" />
                  </div>
                  <h2>{this.props.user.education}</h2>
                  <hr className='Solid'/>
                </div>
                <div className='user-details'>
                  <div className='details-desc'>
                    <p className='user-info' >Occupation</p>
                    <img alt="profile" className='user-icon' src="https://img.icons8.com/cotton/64/000000/briefcase--v1.png" />
                  </div>
                  <h2>{this.props.user.occupation}</h2>
                  <hr className='Solid'/>
                </div>
                <div className='user-details'>
                  <div className='details-desc'>
                    <p className='user-info'  >Industry</p>
                    <img alt="profile" className='user-icon' src="https://img.icons8.com/cotton/64/000000/company.png" />
                  </div>
                  <h2>{this.props.user.industry}</h2>
                  <hr className='Solid'/>
                </div>
                <div className='user-details'>
                  <div className='details-desc'>
                    <p className='user-info' >About Me</p>
                    <img alt="profile"  className='user-icon' src="https://img.icons8.com/cotton/64/000000/name--v2.png" />
                  </div>
                  <h2>{this.props.user.aboutMe}</h2>
                  <hr className='Solid'/>
                </div>
                <div className='user-details'>
                  <div className='details-desc'>
                    <p className='user-info' >Links</p>
                    <img alt="profile"  className='user-icon' src="https://img.icons8.com/cotton/64/000000/external-link.png" />
                  </div>
                  <div className='links'> 
                    <h2><a href={this.props.user.linkedIn}><img alt="profile" className='links img' src="https://img.icons8.com/color/48/000000/linkedin.png" /></a></h2> 
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    }
  }
}

export default Profile;