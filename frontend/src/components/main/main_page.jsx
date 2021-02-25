import React from 'react';
import ProfileContainer from './profile_container'; 

class MainPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      usersToDisplay: [],
      loadingData: true,
    }
    this.swipe = this.swipe.bind(this); 
  }

  componentDidUpdate(){
    if(this.state.loadingData){
      this.props.getSelf(this.props.myId);
      console.log("comp did update", this.props.usersToDisplay)
      this.setState({loadingData: false, usersToDisplay: this.props.usersToDisplay});
    }
  }
  componentDidMount(){
    this.props.getSelf(this.props.myId);
    if(this.state.loadingData){
      this.props.getSelf(this.props.myId);
      console.log("comp did update", this.props.usersToDisplay)
      this.setState({loadingData: false, usersToDisplay: this.props.usersToDisplay});
    }
    if(this.props.self){

      this.props.filterUsersBy('city', this.props.self.city);
    }
  }
  componentWillMount(){
    this.setState({usersToDisplay: []});
    this.props.getSelf(this.props.myId).then( ()=>{
      if(this.props.self){ 
        this.props.filterUsersBy('city', this.props.self.city) 
      }
    })
    
      .then( ()=> {
        this.props.getConnections(this.props.myId);
        this.props.getBlocks(this.props.myId);
        this.props.getPendings(this.props.myId);
      })
      .then( ()=> this.setState({usersToDisplay: this.props.usersToDisplay})); 
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