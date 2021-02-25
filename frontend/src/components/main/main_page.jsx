import React from 'react';
import ProfileContainer from './profile_container'; 

class MainPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      usersToDisplay: []
    }
    this.swipe = this.swipe.bind(this); 
    this.nextProfile = this.nextProfile.bind(this);
  }

  componentWillMount(){
    this.setState({usersToDisplay: []});
    this.props.getSelf(this.props.myId)
      .then( ()=> {
        this.props.getConnections(this.props.myId);
        this.props.getBlocks(this.props.myId);
        this.props.getPendings(this.props.myId);
        this.props.filterUsersBy('city', this.props.self.city);
      })
      .then( ()=> this.setState({usersToDisplay: this.props.usersToDisplay})); 
  }


  nextProfile(){
    let array = this.state.usersToDisplay.slice(1);
    this.setState({usersToDisplay: array});
  }
  swipe(filter){
    if(filter === 'right'){
      return (e)=> {
        e.preventDefault();
        //connect or add to pending  
        if(this.state.usersToDisplay.length>0){
          console.log("swipe"); 
          let remove = this.state.usersToDisplay[0]; 
          let array = this.state.usersToDisplay.slice(1); 
          this.props.removeUserFromState(remove._id); 
          this.setState({usersToDisplay: array})
          // this.props.createConnection(this.props.myId, remove._id, "add");
          alert("CONNECT"); 
        }
      }
    }
    if(filter ==='left'){
      return (e)=>{
        //block 
        e.preventDefault(); 
        if(this.state.usersToDisplay.length>0){
          console.log("swipe"); 
          let remove = this.state.usersToDisplay[0]; 
          let array = this.state.usersToDisplay.slice(1); 
          this.props.removeUserFromState(remove._id); 
          this.setState({usersToDisplay: array})
          alert("BLOCK"); 
        }
      }
    }
  }
  render() {
    let nextProfile = '';
    if(this.state.usersToDisplay.length>0){
      nextProfile=this.state.usersToDisplay[0];
    }
    return (
      <div id="main-page">
          <ProfileContainer user={nextProfile}/>
          {/* <button onClick={this.nextProfile}>Next</button> */}
          <div id="swipe">
            <button onClick={this.swipe('left')}>left</button>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <button onClick={this.swipe('right')}>right</button>
          </div>
      </div>
    );
  }
}

export default MainPage;