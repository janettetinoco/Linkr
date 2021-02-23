import React from 'react';


class Profile extends React.Component{
  constructor(props){
    super(props);

    this.props.filterUsersBy('city', 'San Francisco');
  }

  componentDidMount(){
    // get all users in the database in the current users city. 
    console.log(this.props.usersToDisplay);
  }

  render(){
    return(
      <div id="profile">
        <div id="header">
          <div id="img">
            
          </div>
          <h1>Name</h1>
          <span>Age</span>
          <span>City</span>
        </div>
        <div id="body">
          <div id="stats">

          </div>
          <div id="about-me">

          </div>
        </div>
      </div>
    )
  }
}

export default Profile;