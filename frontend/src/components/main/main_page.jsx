import React from 'react';
import ProfileContainer from './profile_container'; 

class MainPage extends React.Component {

  constructor(props){
    super(props);
    this.loadingUsers();
    this.state = {
      usersToDisplay: this.props.usersToDisplay,
      loadingData: true,
    }
    this.swipe = this.swipe.bind(this); 
    this.loadingUsers = this.loadingUsers.bind(this);
  }
  componentDidUpdate(){
    if(this.state.loadingData){
      this.loadingUsers();
      this.setState({loadingData: false, usersToDisplay: this.props.usersToDisplay})
    }
  }
  componentWillUpdate(){
    if(this.state.loadingData){
      console.log("comp will update");
      this.loadingUsers();
      this.setState({loadingData: false, usersToDisplay: this.props.usersToDisplay})
    }

  }
  componentWillMount(){
    // this.loadingUsers();
    console.log("comp will mount")
    this.setState({usersToDisplay: this.props.usersToDisplay});
  }
  // componentDidMount(){
  //   this.props.getSelf(this.props.myId);
  //   if(this.state.loadingData){
  //     this.props.getSelf(this.props.myId);
  //     console.log("comp did update", this.props.usersToDisplay)
  //     this.setState({loadingData: false, usersToDisplay: this.props.usersToDisplay});
  //   }
  //   if(this.props.self){
  //     this.props.filterUsersBy('city', this.props.self.city);
  //   }
  //   this.forceUpdate();
  // }
  // componentWillMount(){

  //   this.setState({usersToDisplay: []});
  //   this.props.getSelf(this.props.myId).then( ()=>{
  //     if(this.props.self){ 
  //       this.props.filterUsersBy('city', this.props.self.city) 
  //     }
  //   })
  //     .then( ()=> {
  //       this.props.getConnections(this.props.myId);
  //       this.props.getBlocks(this.props.myId);
  //       this.props.getPendings(this.props.myId);
  //     })
  //     .then( ()=> this.setState({usersToDisplay: this.props.usersToDisplay})); 
  // }

  loadingUsers(){
    this.props.getSelf(this.props.myId)
    .then ( ()=>{
      console.log("filter by city");
      this.props.filterUsersBy('city', this.props.self.city)
    })
    .then ( ()=> {
      // this.props.filterUsersBy('city', this.props.self.city)
      // this.props.getConnections(this.props.myId);
      // this.props.getBlocks(this.props.myId);
      // this.props.getPendings(this.props.myId);
      this.forceUpdate();
      this.setState({usersToDisplay: this.props.usersToDisplay});
    });
    this.props.getConnections(this.props.myId);
    this.props.getBlocks(this.props.myId);
    this.props.getPendings(this.props.myId);
    // this.forceUpdate();
    // this.setState({});
  }

  swipe(filter){
    let status; 
    if(filter ==='left'){
      status = "block"; 
    }
    if(filter === 'right'){
      status ="add";
    }

    return (e)=> {
      // e.preventDefault();
      //connect or add to pending  
      if(this.state.usersToDisplay.length>0){
        let remove = this.state.usersToDisplay[0]; 
        let array = this.state.usersToDisplay.slice(1); 
        this.props.removeUserFromState(remove._id); 
        this.setState({usersToDisplay: array})
        this.props.createConnection(this.props.myId, remove._id, status);
      }
    }
  }
  render(){

    let nextProfile = '';
    if(this.state.usersToDisplay.length>0){
      nextProfile=this.state.usersToDisplay[0];
    }
    return (
      <div id="main-page">
          <ProfileContainer user={nextProfile}/>
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