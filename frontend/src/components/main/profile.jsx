import React from 'react';


class Profile extends React.Component{
  // constructor(props){
  //   super(props);

    
  // }

  componentDidMount(){
  }

  render(){
    return(
      <div id="profile">
        <div id="header">
          <div id="img">
            <hr/>
            I<br />
            &emsp;M<br />
            &emsp;&emsp;A<br />
            &emsp;&emsp;&emsp;G<br />
            &emsp;&emsp;&emsp;&emsp;E<br />
            <hr/>
          </div>
          <h1>{this.props.user.name}</h1>
          <span>{this.props.user.city}</span>
          <span></span>
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