import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();

    this.state = {
      name: '',
      email: '',
      password: '',
      business: '',
      industry: '',
      recruiterStatus: '',
      city: '',
      imageFile: null,
      imageUrl: null,
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleButton = this.handleButton.bind(this);
    this.clearedErrors = false;
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result })
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      business: this.state.business,
      industry: this.state.industry,
      recruiterStatus: this.state.recruiterStatus,
      city: this.state.city,
      image: this.state.imageUrl
    }
    this.props.signup(user)
      .then(res => {
        let file = this.state.imageFile;
        if(file){
          const image = new FormData();
          image.append('image', file);
          this.props.uploadImage(image)
        }
      
    })
    .then(()=>this.props.login(user))
    .then(this.props.closeModal)
    .then(()=>this.props.history.push('/'));
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
    const preview = this.state.imageUrl ? <img src={this.state.imageUrl} /> : null;
    return (
      <div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div>
            {this.renderErrors()}
            {this.state.imageUrl ? <span className="image-preview">{preview}</span> :
            <input type="file" onChange={this.handleFile}/>}
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
            <div>
              <h1>Are you a recruiter?</h1>
              <button onClick={this.handleButton('true')}>Yes</button>
              <button onClick={this.handleButton('false')}>No</button>
            </div>
          </div>
          <input type="submit" value="Sign Up" />
        </form>
      </div>

    )
  }
}

export default withRouter(SignupForm);
