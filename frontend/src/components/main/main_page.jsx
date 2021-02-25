import React from 'react';
import ProfileContainer from './profile_container'; 

class MainPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      usersToDisplay: []
    }
  
    this.nextProfile = this.nextProfile.bind(this);
  }

  componentWillMount(){
    this.setState({usersToDisplay: []});
    this.props.getSelf(this.props.myId)
      .then( ()=> this.props.filterUsersBy('city', this.props.self.city))
      .then( ()=> this.setState({usersToDisplay: this.props.usersToDisplay})); 
  }


  nextProfile(){
    let array = this.state.usersToDisplay.slice(1);
    this.setState({usersToDisplay: array});
  }
  render() {
    let nextProfile = '';
    if(this.state.usersToDisplay.length>0){
      nextProfile=this.state.usersToDisplay[0];
    }
    return (
      <div id="main-page">
          <ProfileContainer user={nextProfile}/>
          <button onClick={this.nextProfile}>Next</button>
      </div>
    );
  }
}

export default MainPage;