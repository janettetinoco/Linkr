
import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);

    this.doChat = this.doChat.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      // 
      this.props.logout();
  }

  doChat(e){
    if (e.currentTarget.innerText === 'About us'){
      document.getElementsByClassName('o-chat')[0].style.display = 'none'
      document.getElementsByClassName('chat-container')[0].style.display = 'none'
    } else {
      document.getElementsByClassName('o-chat')[0].style.display = 'flex'
      document.getElementsByClassName('chat-container')[0].style.display = 'block'
    }
  }

  

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className='nav-bar'>
             <Link to="/"> <div className='float-left'>
                <img alt="navbar" src="faviconL.ico" />
                <h1>inkr</h1>
              </div></Link>
              <div className='float-right'>
                <div>
                  <Link className="nav-links" to={'/about-us'} onClick={this.doChat}>About us</Link>
                  <Link className="nav-links" to={'/'} onClick={this.doChat}>Home</Link>
                  <Link className="nav-links" to={'/profile'} onClick={this.doChat}>Profile</Link>
                  <Link className="nav-links" to={'/profile/connections'} onClick={this.doChat}>Connections</Link>
                  <button className="btn-bg logout" onClick={this.logoutUser}>Logout</button>
                </div>
              </div>
            </div>
        );
      } else {
        return (
            <div className='nav-bar'>
            <Link to="/"> <div className='float-left'>
              <img alt="navbar" src="faviconL.ico" />
              <h1>inkr</h1>
            </div></Link>
              <div className='float-right'>
                <nav className="login-signup">
                  <Link className="btn-sm" id="about-link" to={'/about-us'}>About Us</Link>
                  <button className="btn-sm" onClick={() => this.props.openModal('signup')}>Join us</button>
                &nbsp;
                  <button className="btn-bg" onClick={() => this.props.openModal('login')}>Sign In</button>
                </nav>
              </div>
            </div>

        );
      }
  }

  render() {
     

    return (
      <div className='nav-wrap'>
        { this.getLinks() }
      </div>
    );
  }
}

export default NavBar;