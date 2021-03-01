import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      // errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // // Once the user has been authenticated, redirect to the Tweets page
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.currentUser === true) {
  //     this.props.history.push('/');
  //   }

  //   // Set or clear errors
  //   this.setState({errors: nextProps.errors})
  // }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount(){
    this.props.resetErrors()
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user).then( ()=>{
      if(this.props.loggedIn){
        this.props.closeModal();
      }
    }).then(()=>this.props.history.push('/') ); 
    this.setState({
      email: "",
      password: ""
    })
  }

  // Render the session errors if there are any
  renderErrors() {
    (`these are the errors`)
    (this.props.errors)
    if (this.props.errors.length === 0) {
      return null
    } else {
      return(
        <ul className="errors-container">
          {Object.keys(this.props.errors).map((error, i) => (
            <li key={`error-${i}`}>
              {this.props.errors[error]}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    let emailPlaceholder = "Email";
    let emailClassName = "login-input";
    let passwordPlaceholder = "Password";
    let passwordClassName = "login-input";
    if (this.props.errors.email) {
      emailPlaceholder = this.props.errors.email
      emailClassName = "login-input-error"
    }
    if (this.props.errors.password) {
      passwordPlaceholder = this.props.errors.password
      passwordClassName = "login-input-error"
    }
    return (
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div>
            <p className="header-container">
              Welcome back to Linkr
            </p>
              <input 
                className={emailClassName}
                type="text"
    
                value={this.state.email}
                onChange={this.update('email')}
                placeholder={emailPlaceholder}
              />
            <br/>
              <input 
                className={passwordClassName}
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder={passwordPlaceholder}
              />
            <br/>
            <input
              className="login-submit" 
              type="submit" 
              value="Submit"
            />
          </div>
        </form>
    );
  }
}

export default withRouter(LoginForm);