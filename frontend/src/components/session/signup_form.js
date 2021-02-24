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

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user, this.props.history)
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
        <form onSubmit={this.handleSubmit}>
          <div>
            {this.renderErrors()}
            <input
              type="text"
              placeholder="Full Name"
              value={this.state.name}
              onChange={this.update('name')}
            />
            <input
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update('email')}
            />
            <input
              type="text"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
            />
            <input
              type="text"
              placeholder="Company"
              value={this.state.business}
              onChange={this.update('business')}
            />
            <input
              type="text"
              placeholder="Industry"
              value={this.state.industry}
              onChange={this.update('industry')}
            />
            <div>
              <h1>Are you a recruiter?</h1>
              <button onClick={this.handleButton('true')}>Yes</button>
              <button onClick={this.handleButton('false')}>No</button>
            </div>
            <input
              type="text"
              placeholder="City"
              value={this.state.city}
              onChange={this.update('city')}
            />
          </div>
          <input type="submit" value="Sign Up" />
        </form>
      </div>

    )
  }
}

export default withRouter(SignupForm);
