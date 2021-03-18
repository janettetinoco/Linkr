import React from 'react';
import { openModal } from '../../actions/modal_actions';
import ProfileContainer from './profile_container'; 
import Chat from '../chat/chat';

class MainPage extends React.Component {

  constructor(props){
    super(props);
       this.props.clearUsers();
    this.loadingUsers();
    this.state = {
      usersToDisplay: this.props.usersToDisplay,
      loadingData: true,
      currentCity: ''
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
      this.loadingUsers();
      this.setState({loadingData: false, usersToDisplay: this.props.usersToDisplay})
    }

  }
  componentDidMount(){

  }
UNSAFE_componentWillMount(){

    this.setState({usersToDisplay: this.props.usersToDisplay});
  }

  loadingUsers(){
    this.props.getSelf(this.props.myId)
    .then ( ()=>{
      if(this.props.self){
        this.props.filterUsersBy('city', this.props.self.city)
        .then ( ()=> {
          // this.forceUpdate();
          this.setState({usersToDisplay: this.props.usersToDisplay, currentCity: this.props.self.city});
        });
      }
    })
    this.props.getConnections(this.props.myId);
    this.props.getBlocks(this.props.myId);
    this.props.getPendings(this.props.myId);
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
        this.props.createConnection(this.props.myId, remove._id, status).then((res)=>{
          // 
          if(res.data ==="connect"){
            this.props.openModal('connection');
          }
        });
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
            <button onClick={this.swipe('left')}>skip</button>
            <button onClick={this.swipe('right')}>connect</button>
          </div>
        <div id="help-icon" ><img onClick={() => {
          this.props.openModal('welcome')
          setTimeout(() => this.props.closeModal(), 15000)}} src="https://img.icons8.com/cotton/64/000000/info--v2.png" /></div>
      <Chat />
      </div>
    );
  }
}

export default MainPage;