import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
          <div className='splash-container'>
            <div className='nav-bar'>
              <div className='float-left'>
                <h1>Linkr</h1>
              </div>
              <div className='float-right'>
                <div>
                  <Link className="nav-links" to={'/'}>Home</Link>
                  <Link className="nav-links" to={'/profile'}>Profile</Link>
                  <Link className="nav-links" to={'/profile/connections'}>Connections</Link>
                  <button className="btn-bg logout" onClick={this.logoutUser}>Logout</button>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className='splash-container'>
          <div className='nav-bar'>
            <div className='float-left'>
              <h1>Linkr</h1>
            </div>
            <div className='float-right'>
              <nav className="login-signup">
                <button className="btn-sm" onClick={() => this.props.openModal('signup')}>Join us</button>
              &nbsp;
                <button className="btn-bg" onClick={() => this.props.openModal('login')}>Sign In</button>
              </nav>
            </div>
          </div>
          <div className='hero'>
            <h1 className='splash-text'>
              Welcome to your professional community. 
            </h1>
            <img className='hero-img' src='https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4' />
          </div>
          <div className='hero2'>
            <h1 className='splash-text2'>
              Connect with people in any industry. 
            </h1>
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