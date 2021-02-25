import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      business: '',
      industry: '',
      recruiterStatus: '',
      city: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.clearedErrors = false;
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user, this.props.history).then(()=>this.props.login(user))
    .then(this.props.closeModal);
  };

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  handleButton(bool){
    return ((e) => {
      e.preventDefault();
      this.setState({ recruiterStatus: bool })
    })  
  }

  componentDidMount() {
    this.props.resetErrors()
  }
  

  render() {
    return (
      <div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div>
            {this.renderErrors()}
            <input
              className="signup-input"
              type="text"
              placeholder="Full Name"
              value={this.state.name}
              onChange={this.update('name')}
            />
            <input
              className="signup-input"
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update('email')}
            />
            <input
              className="signup-input"
              type="text"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
            />
            <input
              className="signup-input"
              type="text"
              placeholder="Company"
              value={this.state.business}
              onChange={this.update('business')}
            />
            <input
              className="signup-input"
              type="text"
              placeholder="Industry"
              value={this.state.industry}
              onChange={this.update('industry')}
            />
            <input
              className="signup-input"
              type="text"
              placeholder="City"
              value={this.state.city}
              onChange={this.update('city')}
            />
            <footer className="session-footer">
              <div>
                <h1>Are you a recruiter?</h1>
                <button className="recruiter-button" onClick={this.handleButton('true')}>Yes</button>
                <button className="recruiter-button" onClick={this.handleButton('false')}>No</button>
              </div>
              <input 
                className="session-submit"
                type="submit"
                value="Create Account"
              />
            </footer>
          </div>
        </form>
      </div>

    )
  }
}

export default withRouter(SignupForm);
