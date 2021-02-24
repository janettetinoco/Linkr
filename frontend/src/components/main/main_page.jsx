import React from 'react';
import ProfileContainer from './profile_container'; 

class MainPage extends React.Component {

  constructor(props){
    super(props);

    this.props.filterUsersBy('city', 'San Francisco');
    console.log(this.props.usersToDisplay); 
  }
  componentDidUpdate(){
    if(!this.props.usersToDisplay){
      
    }
  }
  render() {
    return (
      <div>
        <ProfileContainer />
      </div>
    );
  }
}

export default MainPage;