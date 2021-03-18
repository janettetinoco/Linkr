import React from 'react';
//maybe a loading icon

class FriendDetail extends React.Component{

  constructor(props){
    super(props); 
    this.state = {
      friend: this.props.friend
    }
  }
  componentDidMount(){
    this.setState({friends: this.props.friends});
  }
  
  componentDidUpdate(prevProps){
    if (prevProps.match.params.friendId !== this.props.match.params.friendId){
      this.setState({friends: this.props.friends});
    }
  }
    handleMoreDetails(){
    let h = document.getElementsByClassName('profile-container')
    if (!h[0].classList.contains('is-flipped')){
      h[0].classList.add('is-flipped')
    } else {
      h[0].classList.remove('is-flipped')
    }
  }

  render(){
    // if(this.props.loading){
      // return <section className="profile-detail"><LoadingIcon /></section>;
    // }

    if(!this.props.friend) return null; 

    return (
      <div className='friend-detail'>
        <div className='profile-container'>
          <div className='card'>
            <div className="flip-card-front">
              <div className='image-container'>
                <img alt="profile" id='img-main' src={this.props.friend.imageUrl} />
                <div className='edit-b'>
                  <button onClick={this.handleMoreDetails}><img alt="profile" id='edit' className='user-icon' src="https://img.icons8.com/ultraviolet/40/000000/edit.png" /></button>
                  <h1>More Details</h1>
                </div>
              </div>
              <div className='user-details-name'>
                <h1>{this.props.friend.name}</h1>
              </div>
              <div className='user-details'>
                <div className='user-info loc' >
                  <img alt="profile" className='user-icon' src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png" />
                  <p>{this.props.friend.city}</p>
                </div>
              </div>
              <br />
              
              <div className='user-details'>
                <div className='details-desc'>
                  <p className='user-info' >Occupation</p>
                  <img alt="profile" className='user-icon' src="https://img.icons8.com/cotton/64/000000/briefcase--v1.png" />
                </div>
                <h2>{this.props.friend.occupation}</h2>
                <hr className='Solid'/>
              </div>
              <div className='user-details'>
                <div className='details-desc'>
                  <p className='user-info'  >Industry</p>
                  <img alt="profile" className='user-icon' src="https://img.icons8.com/cotton/64/000000/company.png" />
                </div>
                <h2>{this.props.friend.industry}</h2>
                <hr className='Solid'/>
              </div>
              <div className='user-details'>
                <div className='details-desc'>
                  <p className='user-info' >Links</p>
                  <img alt="profile"  className='user-icon' src="https://img.icons8.com/cotton/64/000000/external-link.png" />
                </div>
                <div className='links'> 
                  <h2><a href={this.props.friend.linkedIn}><img alt="profile" className='links img' src="https://img.icons8.com/color/48/000000/linkedin.png" /></a></h2> 
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className='image-container'>
                <img alt="profile" id='img-main' src={this.props.friend.imageUrl} />
                <div className='edit-b'>
                  <button onClick={this.handleMoreDetails}><img alt="profile" id='edit' className='user-icon' src="https://img.icons8.com/ultraviolet/40/000000/edit.png" /></button>
                  <h1>More Details</h1>
                </div>
              </div>
              <div className='user-details-name'>
                <h1>{this.props.friend.name}</h1>
              </div>
              <div className='user-details'>
                <div className='user-info loc' >
                  <img alt="profile" className='user-icon' src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png" />
                  <p>{this.props.friend.city}</p>
                </div>
              </div>
              <br />
              <div className='user-details'>
                <div className='details-desc'>
                  <p className='user-info' >Education</p>
                  <img alt="profile" className='user-icon' src="https://img.icons8.com/cotton/64/000000/graduation-cap--v2.png" />
                </div>
                <h2>{this.props.friend.education}</h2>
                <hr className='Solid'/>
              </div>
  
              <div className='user-details'>
                <div className='details-desc'>
                  <p className='user-info' >About Me</p>
                  <img alt="profile"  className='user-icon' src="https://img.icons8.com/cotton/64/000000/name--v2.png" />
                </div>
                <h2>{this.props.friend.aboutMe}</h2>
                <hr className='Solid'/>
              </div>
              <div className='user-details'>
                <div className='details-desc'>
                  <p className='user-info' >Links</p>
                  <img alt="profile"  className='user-icon' src="https://img.icons8.com/cotton/64/000000/external-link.png" />
                </div>
                <div className='links'> 
                  <h2><a href={this.props.friend.linkedIn}><img alt="profile" className='links img' src="https://img.icons8.com/color/48/000000/linkedin.png" /></a></h2> 
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FriendDetail;