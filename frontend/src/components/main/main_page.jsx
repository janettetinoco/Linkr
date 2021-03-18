import React from 'react';
import ProfileContainer from './profile_container'; 
// import Chat from '../chat/chat';

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
          this.setState({usersToDisplay: this.props.usersToDisplay, currentCity: this.props.self.city});
        });
      }
    })
    this.props.getConnections(this.props.myId);
    this.props.getBlocks(this.props.myId);
    this.props.getPendings(this.props.myId);
    this.toggleChat = this.toggleChat.bind(this)
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
          // debugger
          if(res.data ==="connect"){
            this.props.openModal('connection');
          }
        });
      }
    }
  }


  toggleChat(e){
    // debugger
    if (e.currentTarget.children[0].innerText === "Open Chat"){
      e.currentTarget.children[0].innerText = "Close Chat"
      e.currentTarget.children[0].style.color ='red'
      document.getElementsByClassName('chat-container')[0].style.display = 'block'
    } else {
      e.currentTarget.children[0].innerText = "Open Chat"
      e.currentTarget.children[0].style.color ='rgb(173, 255, 47)'
      document.getElementsByClassName('chat-container')[0].style.display = 'none'
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
        <div id="help-icon" ><img alt="info-icon" onClick={() => {
          this.props.openModal('welcome')
          setTimeout(() => this.props.closeModal(), 15000)}} src="https://img.icons8.com/cotton/64/000000/info--v2.png" /></div>

        {/* <Chat /> */}

        <div className='o-chat' onClick={this.toggleChat}>
          <h1>Open Chat</h1>
        </div>
      </div>
    );
  }
}

export default MainPage;