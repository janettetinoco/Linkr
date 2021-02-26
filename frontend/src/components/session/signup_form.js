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
    // this.props.signup(user)
    //   .then(res => {
    //     debugger
    //     let file = this.state.imageFile;
    //     if(file){
    //       const image = new FormData();
    //       image.append('image', file);
    //       this.props.uploadImage(image)
    //     }
      
    // })
    if(this.state.imageFile){
      const image = new FormData();
      image.append('image', this.state.imageFile);
      this.props.uploadImage(image).then((res) => {
        let user = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          business: this.state.business,
          industry: this.state.industry,
          recruiterStatus: this.state.recruiterStatus,
          city: this.state.city,
          imageUrl: res.image.data.imageUrl
        }
        debugger
        this.props.signup(user)
          .then(() => this.props.login(user))
          .then(this.props.closeModal)
          .then(() => this.props.history.push('/'));
      })
    }

   
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
            <div className="city-industry-container">
              <div className="city-industry-icon">City
                <ul className="cit-ind-dropdown">
                  <li className="list-item">San Francisco</li>
                  <li className="list-item">Dallas</li>
                  <li className="list-item">New York</li>
                </ul>
              </div>
              <div className="city-industry-icon">Industry
                <ul className="cit-ind-dropdown">
                  <li className="list-item">Software Engineering</li>
                  <li className="list-item">Wood Chopping</li>
                  <li className="list-item">Political Science</li>
                  <li className="list-item">Biotech</li>
                  <li className="list-item">Space Exploration</li>
                </ul>
              </div>
            </div>
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
