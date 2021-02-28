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
    //add animation to brand
    let profile = document.getElementsByClassName('profile-page')
    let brand = document.getElementsByClassName('float-left')
    if (profile.length){
      brand[0].classList.add('anime')
    }

    return(
   
      <div className='profile-page'>
        <div className='profile-container'>
          <div className='card'>
            <div className='image-container'>
              <img id='img-main' src={this.props.self.imageUrl} />
              <div className='edit-b'>
                <button onClick={this.props.handleEditButton}><img id='edit' className='user-icon' src="https://img.icons8.com/ultraviolet/40/000000/edit.png" /></button>
                <h1>Edit Profile</h1>
              </div>
            </div>
            <div className='user-details-name'>
              <h1>{this.props.self.name}</h1>
            </div>
            <div className='user-details'>
              <p className='user-info loc' ><img className='user-icon' src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png" />{this.props.self.city}</p>
            </div>
            <div className='user-details'>
              <p className='user-info' >Education<img className='user-icon' src="https://img.icons8.com/cotton/64/000000/graduation-cap--v2.png" /></p>
              <h2>{this.props.self.education}</h2>
            </div>
            <div className='user-details'>
              <p className='user-info' >Occupation<img className='user-icon' src="https://img.icons8.com/cotton/64/000000/briefcase--v1.png" /></p>
              <h2>{this.props.self.occupation}</h2>
            </div>
            <div className='user-details'>
              <p className='user-info'  >Industry<img className='user-icon' src="https://img.icons8.com/cotton/64/000000/company.png" /></p>
              <h2>{this.props.self.industry}</h2>
            </div>
            <div className='user-details'>
              <p className='user-info' >About Me<img  className='user-icon' src="https://img.icons8.com/cotton/64/000000/name--v2.png" /></p>
              <h2>{this.props.self.aboutMe}</h2>
            </div>
            <div className='user-details'>
              <p className='user-info' >Links<img  className='user-icon' src="https://img.icons8.com/cotton/64/000000/external-link.png" /></p>
              <div className='links'> 
                <img className='links img' src="https://img.icons8.com/color/48/000000/linkedin.png" />
                <h2><a href='http://linkedin.com'>{this.props.self.linkedIn}</a></h2> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
}

export default MyProfile;
