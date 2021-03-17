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
    let h = document.getElementsByClassName('friend-container')
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
        <div className='friend-container'>
          <div className='friend-card'>
            <div className="flip-card-front">
              <div className='friend-image-container'>
                <img alt="friend-detail-img"id="friend-image" src={this.props.friend.imageUrl} />
                  <div className='more-details-b'>
                    <button onClick={this.handleMoreDetails}><img alt="friend-detail-img"id='more-details' className='friend-user-icon' src="https://img.icons8.com/ultraviolet/40/000000/edit.png" /></button>
                    <h1>More Details</h1>
                </div>
              </div>
              <div className='friend-user-details-name'>
                <h1>{this.props.friend.name}</h1>
              </div>
              <div className='friend-user-details'>
                <p className='friend-user-info loc' ><img alt="friend-detail-img"className='friend-user-icon' src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png" />{this.props.friend.city}</p>
              </div>
              <div className='friend-user-details'>
                <p className='friend-user-info' >Occupation<img alt="friend-detail-img"className='friend-user-icon' src="https://img.icons8.com/cotton/64/000000/briefcase--v1.png" /></p>
                <h2>{this.props.friend.occupation}</h2>
              </div>
              <div className='friend-user-details'>
                <p className='friend-user-info'  >Industry<img alt="friend-detail-img"className='friend-user-icon' src="https://img.icons8.com/cotton/64/000000/company.png" /></p>
                <h2>{this.props.friend.industry}</h2>
              </div>
              <div className='friend-user-details'>
                <p className='friend-user-info' >Links<img alt="friend-detail-img" className='friend-user-icon' src="https://img.icons8.com/cotton/64/000000/external-link.png" /></p>
                <div className='friend-links'> 
                  <img alt="friend-detail-img"className='friend-links img' src="https://img.icons8.com/color/48/000000/linkedin.png" />
                  <h2>{this.props.friend.linkedIn}</h2> 
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className='friend-image-container'>
                <img alt="friend-detail-img"id="friend-image" src={this.props.friend.imageUrl} />
                  <div className='more-details-b'>
                    <button onClick={this.handleMoreDetails}><img alt="friend-detail-img"id='more-details' className='friend-user-icon' src="https://img.icons8.com/ultraviolet/40/000000/edit.png" /></button>
                    <h1>More Details</h1>
                </div>
              </div>
              <div className='friend-user-details-name'>
                <h1>{this.props.friend.name}</h1>
              </div>
              <div className='friend-user-details'>
                <p className='friend-user-info loc' ><img alt="friend-detail-img"className='friend-user-icon' src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png" />{this.props.friend.city}</p>
              </div>
              <div className='friend-user-details'>
                <p className='friend-user-info' >Education<img alt="friend-detail-img"className='friend-user-icon' src="https://img.icons8.com/cotton/64/000000/graduation-cap--v2.png" /></p>
                <h2>{this.props.friend.education}</h2>
              </div>
              <div className='friend-user-details'>
                <p className='friend-user-info' >About Me<img alt="friend-detail-img" className='friend-user-icon' src="https://img.icons8.com/cotton/64/000000/name--v2.png" /></p>
                <h2>{this.props.friend.aboutMe}</h2>
              </div>
              <div className='friend-user-details'>
                <p className='friend-user-info' >Links<img alt="friend-detail-img" className='friend-user-icon' src="https://img.icons8.com/cotton/64/000000/external-link.png" /></p>
                <div className='friend-links'> 
                  <img alt="friend-detail-img"className='friend-links img' src="https://img.icons8.com/color/48/000000/linkedin.png" />
                  <h2>{this.props.friend.linkedIn}</h2> 
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