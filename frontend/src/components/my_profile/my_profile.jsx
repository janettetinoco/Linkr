import React from 'react';

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
      imageFile: '',
      imageUrl: '',
    }
    this.handleEditButton =this.handleEditButton.bind(this)
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result })
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
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
      imageUrl: '',
      imageFile: '',
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
      if (this.state[field] === '' ){
        this.state[field] = this.props.self[field]

      }
    })
    if (this.state.imageFile !== '') {
      const image = new FormData();
      image.append('image', this.state.imageFile);
      let that =this;
      this.props.uploadImage(image).then((res) => {
        that.state.imageUrl = res.image.data.imageUrl
      })
    }

    this.props.updateProfile(this.state)
   
    let h = document.getElementsByClassName('profile-container')
    h[0].classList.remove('is-flipped')

  }
  

  render(){
    if(!this.props.self){
      return null;
    }
    let profPic;
    if(this.state.imageUrl === ''){
      profPic = <img alt="profile" id='img-main' src={this.props.self.imageUrl} />
    }else{
      profPic = <img alt="profile" id='img-main' src={this.state.imageUrl} />
    }

    return(
   
      <div className='profile-page'>
        <div className='profile-container'>
          <div className='card'>
            <div className="flip-card-front">
              <div className='image-container'>
                <img alt="profile" id='img-main' src={this.props.self.imageUrl} />
                <div className='edit-b'>
                  <button onClick={this.handleEditButton}><img alt="profile" id='edit' className='user-icon' src="https://img.icons8.com/ultraviolet/40/000000/edit.png" /></button>
                  <h1>Edit Profile</h1>
                </div>
              </div>
              <div className='user-details-name'>
                <h1>{this.props.self.name}</h1>
              </div>
              <div className='user-details'>
                <div className='user-info loc' >
                  <img alt="profile" className='user-icon' src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png" />
                  <p>{this.props.self.city}</p>
                </div>
              </div>
              <div className='user-details'>
                <div className='details-desc'>
                  <p className='user-info' >Education</p>
                  <img alt="profile" className='user-icon' src="https://img.icons8.com/cotton/64/000000/graduation-cap--v2.png" />
                </div>
                <h2>{this.props.self.education}</h2>
                <hr className='Solid'/>
              </div>
              <div className='user-details'>
                <div className='details-desc'>
                  <p className='user-info' >Occupation</p>
                  <img alt="profile" className='user-icon' src="https://img.icons8.com/cotton/64/000000/briefcase--v1.png" />
                </div>
                <h2>{this.props.self.occupation}</h2>
                <hr className='Solid'/>
              </div>
              <div className='user-details'>
                <div className='details-desc'>
                  <p className='user-info'  >Industry</p>
                  <img alt="profile" className='user-icon' src="https://img.icons8.com/cotton/64/000000/company.png" />
                </div>
                <h2>{this.props.self.industry}</h2>
                <hr className='Solid'/>
              </div>
              <div className='user-details'>
                <div className='details-desc'>
                  <p className='user-info' >About Me</p>
                  <img alt="profile"  className='user-icon' src="https://img.icons8.com/cotton/64/000000/name--v2.png" />
                </div>
                <h2>{this.props.self.aboutMe}</h2>
                <hr className='Solid'/>
              </div>
              <div className='user-details'>
                <div className='details-desc'>
                  <p className='user-info' >Links</p>
                  <img alt="profile"  className='user-icon' src="https://img.icons8.com/cotton/64/000000/external-link.png" />
                </div>
                <div className='links'> 
                  <h2><a href={this.props.self.linkedIn}><img alt="profile" className='links img' src="https://img.icons8.com/color/48/000000/linkedin.png" /></a></h2> 
                </div>
              </div>
            </div>
            <div className='flip-card-back'>
              <div className='image-container'>
                <div className='upload-pic'>
                  {/* <input type="file" onChange={this.handleFile} /> */}
                    {/* <img src="https://img.icons8.com/ios/50/ffffff/test-account.png" /> */}
                  <button>
                    <img src="https://img.icons8.com/ios/50/ffffff/test-account.png"/>
                    <input type="file" onChange={this.handleFile} />
                  </button>
                  <h1>Upload Picture</h1>
                </div>
                <div>{profPic}</div>
                <div className='edit-b'>
                  <button onClick={this.handleEditButton}><img alt="profile" id='edit' className='user-icon' src="https://img.icons8.com/ios-filled/64/000000/left.png" /></button>
                  <h1>Go back</h1>
                </div>
              </div>
                <form className='edit-form' onSubmit={this.handleSubmit}>
                  <div className='edit-fields'>
                    <label>Your name</label>
                    <input type="text" placeholder={this.props.self.name} onChange={this.update('name')} value={this.state.name}/>
                  </div>
                  <hr className='Solid'/>
                  <div className='edit-fields'>
                    <label>City</label>
                    <input type="text" placeholder={this.props.self.city} onChange={this.update('city')} value={this.state.city}/>
                  </div>
                  <hr className='Solid'/>
                  <div className='edit-fields'>
                    <label>Education</label>
                    <input type="text" placeholder={this.props.self.education} onChange={this.update('education')} value={this.state.education}/>
                  </div>
                  <hr className='Solid'/>
                  <div className='edit-fields'>
                    <label>Occupation</label>
                    <input type="text" placeholder={this.props.self.occupation} onChange={this.update('occupation')} value={this.state.occupation}/>
                  </div>
                  <hr className='Solid'/>
                  <div className='edit-fields'>
                    <label>Industry</label>
                    <input type="text" placeholder={this.props.self.industry} onChange={this.update('industry')} value={this.state.industry}/>
                  </div>
                  <hr className='Solid'/>
                  <div className='edit-fields'>
                    <label>About me</label>
                    <input type="textarea" placeholder={this.props.self.aboutMe} onChange={this.update('aboutMe')} value={this.state.aboutMe}/>
                  </div>
                  <hr className='Solid'/>
                  <div className='edit-fields'>
                    <label>Links</label>
                    <input type="text" placeholder={this.props.self.linkedIn} onChange={this.update('linkedIn')} value={this.state.links}/>
                  </div>
                  <button className='update-btn'><h1>Update Profile</h1></button>
                  </form>
            </div>
          </div>
        </div>
      </div>
    )}

}

export default MyProfile;
