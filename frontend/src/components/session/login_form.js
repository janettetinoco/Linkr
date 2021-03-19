import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }
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
    this.props.resetErrors();
    let user;
    if(e.target.value === 'demo'){
      user = {email: 'Michaeln@mn.com', password: '123456'};
    }
    else{
      user = {
      email: this.state.email,
      password: this.state.password
      };
    }

    this.props.login(user)
    .then( ()=>{
      if(this.props.loggedIn){
        this.props.closeModal();
      }
      else{

        Object.keys(this.state).forEach((field)=>{
          if(this.props.errors[field]){
            user[field] =''; 
          }
        });
        this.setState({email:user.email,password:user.password});
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
    let emailClassName = "login-input";
    let passwordClassName = "login-input";
    let emailError, passwordError = '';
    if (this.props.errors.email) {
      emailError = this.props.errors.email
      emailClassName = "login-input-error"
    }
    if (this.props.errors.password) {
      passwordError = this.props.errors.password
      passwordClassName = "login-input-error"
    }
    return (
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div>
              <p className="header-container">
                Welcome back to Linkr
              </p>
              <div className="field-errors">
                {emailError}
              </div>
              <input 
                className={emailClassName}
                type="text"
    
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              <div className="field-errors">
                {passwordError}
              </div>
              <input 
                className={passwordClassName}
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
              <br/>
              <button className="login-demo-submit" value="demo" onClick={this.handleSubmit}>Demo User</button>
              <input
                className="login-submit" 
                type="submit" 
                value="Submit"
              />
              <div className="switch-form-container">
                Don't already have an account? {this.props.signupForm}
              </div>
          </div>
        </form>
    );
  }
}

export default withRouter(LoginForm);