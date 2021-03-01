import React from 'react';
import {Link} from 'react-router-dom'
// import {updateProfile} from '../../util/user_api_util'

class MyProfile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.myId,
      name: '',
      city: '',
      education: '',
      occupation: '',
      linkedIn: '',
      aboutMe: '',
      industry: '',
    }
    this.handleEditButton =this.handleEditButton.bind(this)
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEditButton(){
  
    this.setState({
      id: this.props.myId,
      name: '',
      city: '',
      education: '',
      occupation: '',
      linkedIn: '',
      aboutMe: '',
      industry: '',
    })

    let h = document.getElementsByClassName('profile-container')
    if (!h[0].classList.contains('is-flipped')){
      h[0].classList.add('is-flipped')
    } else {
      h[0].classList.remove('is-flipped')
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  componentDidMount(){
    this.props.getSelf(this.props.myId)
  }

  handleSubmit(e) {

    e.preventDefault();
    Object.keys(this.state).forEach(field =>{
      if (this.state[field] === ''){
        this.state[field] = this.props.self[field]
      }
    })

    this.props.updateProfile(this.state)
   
    let h = document.getElementsByClassName('profile-container')
    h[0].classList.remove('is-flipped')

  }
  

  render(){
    if(!this.props.self){
      return null;
    }
    
    

    return(
   
      <div className='profile-page'>
        <div className='profile-container'>
          <div className='card'>
            <div className="flip-card-front">
              <div className='image-container'>
                <img id='img-main' src={this.props.self.imageUrl} />
                <div className='edit-b'>
                  <button onClick={this.handleEditButton}><img id='edit' className='user-icon' src="https://img.icons8.com/ultraviolet/40/000000/edit.png" /></button>
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
            <div className='flip-card-back'>
              <div className='image-container'>
                <img id='img-main' src={this.props.self.imageUrl} />
                <div className='edit-b'>
                  <button onClick={this.handleEditButton}><img id='edit' className='user-icon' src="https://img.icons8.com/ios-filled/64/000000/left.png" /></button>
                  <h1>Go back</h1>
                </div>
              </div>
                <form className='edit-form' onSubmit={this.handleSubmit}>
                  <label>Your name
                    <input type="text" placeholder={this.props.self.name} onChange={this.update('name')} value={this.state.name}/>
                  </label>
                  <label>City
                    <input type="text" placeholder={this.props.self.city} onChange={this.update('city')} value={this.state.city}/>
                  </label>
                  <label>Education
                    <input type="text" placeholder={this.props.self.education} onChange={this.update('education')} value={this.state.education}/>
                  </label>
                  <label>Occupation
                    <input type="text" placeholder={this.props.self.occupation} onChange={this.update('occupation')} value={this.state.occupation}/>
                  </label>
                  <label>Industry
                    <input type="text" placeholder={this.props.self.industry} onChange={this.update('industry')} value={this.state.industry}/>
                  </label>
                  <label>About me
                    <input type="text" placeholder={this.props.self.aboutMe} onChange={this.update('aboutMe')} value={this.state.aboutMe}/>
                  </label>
                  <label>Links
                    <input type="text" placeholder={this.props.self.linkedIn} onChange={this.update('linkedIn')} value={this.state.links}/>
                  </label>
                  <button className='update-btn'><h1>Update Profile</h1></button>
                </form>
            </div>
          </div>
        </div>
      </div>
    )}

}

export default MyProfile;
