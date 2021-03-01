import { urlencoded } from 'body-parser';
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
            <div className='nav-bar'>
              <div className='float-left'>
                <img src="faviconL.ico" />
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
        );
      } else {
        return (
            <div className='nav-bar'>
              <div className='float-left'>
                  <img src="faviconL.ico" />
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

        );
      }
  }

  render() {
     //add animation to brand
    let brand = document.getElementsByClassName('float-left')
    if (brand.length){
      brand[0].classList.remove('anime')
    }

    return (
      <div className='nav-wrap'>
        { this.getLinks() }
      </div>
    );
  }
}

export default NavBar;