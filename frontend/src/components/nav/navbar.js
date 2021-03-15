
import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.animeBrand = this.animeBrand.bind(this);
    this.offAnime = this.offAnime.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      // 
      this.props.logout();
  }

  animeBrand(){
    //add animation to brand
    let brand = document.getElementsByClassName('float-left')
    // 
    if (brand.length){
      brand[0].classList.add('anime')
    }
  }

  offAnime(){
    //add animation to brand
    let brand = document.getElementsByClassName('float-left')
    if (brand.length){
      brand[0].classList.remove('anime')
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
                  <Link className="nav-links" to={'/'} onClick={this.offAnime}>Home</Link>
                  <Link className="nav-links" to={'/profile'} onClick={this.animeBrand}>Profile</Link>
                  <Link className="nav-links" to={'/profile/connections'} onClick={this.offAnime}>Connections</Link>
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