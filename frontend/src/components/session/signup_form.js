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
      recruiterStatus: "false",
      city: '',
      imageFile: null,
      imageUrl: null,
      // errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this); 
    this.onRecruiterChange = this.onRecruiterChange.bind(this);
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
      imageUrl: 'https://linkr-dev.s3-us-west-1.amazonaws.com/isgpp_avatar_placeholder.png'
    }
    if(this.state.imageFile){
      const image = new FormData();
      image.append('image', this.state.imageFile);
      this.props.uploadImage(image).then((res) => {
        user.imageUrl = res.image.data.imageUrl
      })
    } 
    this.props.signup(user)
      .then(() => {
        if(this.props.signedIn){
          this.props.login(user).then( ()=>this.props.closeModal());
        }
        this.props.history.push('/');
      });

    this.setState({
      name: "",
      email: "",
      password: ""
    })
  };

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.props.errors[error]}
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

  onRecruiterChange(e) {
    this.setState({ recruiterStatus: e.currentTarget.value});
  }
  
  componentDidMount() {
    this.props.resetErrors()
  }
  
  render() {
    const preview = this.state.imageUrl ? <img alt="signup-form" src={this.state.imageUrl} /> : null;
    let namePlaceholder = "Full Name";
    let nameClassName = "signup-input"
    let emailPlaceholder = "Email";
    let emailClassName = "signup-input";
    let passwordPlaceholder = "Password";
    let passwordClassName = "signup-input";
    if (this.props.errors.name) {
      namePlaceholder = this.props.errors.name;
      nameClassName = "signup-input-error";
    }
    if (this.props.errors.email) {
      emailPlaceholder = this.props.errors.email;
      emailClassName = "signup-input-error";
    }
    if (this.props.errors.password) {
      passwordPlaceholder = this.props.errors.password;
      passwordClassName = "signup-input-error";
    }
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <div>
          {/* {this.renderErrors()} */}
          {this.state.imageUrl ? <span className="image-preview">{preview}</span> :
          <div className="choose-file">Choose File
            <input type="file" onChange={this.handleFile}/>
          </div>
          }
          <input
            className={nameClassName}
            type="text"
            placeholder={namePlaceholder}
            value={this.state.name}
            onChange={this.update('name')}
          />
          <input
            className={emailClassName}
            type="text"
            placeholder={emailPlaceholder}
            value={this.state.email}
            onChange={this.update('email')}
          />
          <input
            className={passwordClassName}
            type="password"
            placeholder={passwordPlaceholder}
            value={this.state.password}
            onChange={this.update('password')}
          />
          <p className="city-industry-errors">
            {this.props.errors.city ? this.props.errors.city : null}
          </p>
          <p className="city-industry-errors">
            {this.props.errors.industry ? this.props.errors.industry : null}
          </p>
          <div className="city-industry-container">
            <div className="city-industry-icon">{this.state.city === '' ? "City" : this.state.city}
              <ul className="cit-ind-dropdown">
                <li 
                  onClick= {()=>this.setState({city: "San Francisco"})}
                  className="list-item"
                >San Francisco</li>
                <li 
                  onClick= {()=>this.setState({city: "Dallas"})}
                  className="list-item"
                >Dallas</li>
                <li 
                  onClick= {()=>this.setState({city: "New York"})}
                  className="list-item"
                >New York</li>
              </ul>
            </div>
            <div className="city-industry-icon">{this.state.industry === '' ? "Industry" : this.state.industry}
              <ul className="cit-ind-dropdown">
                <li 
                  onClick={()=>this.setState({industry: "Software Engineering"})}
                  className="list-item"
                  >Software Engineering</li>
                <li 
                  onClick={()=>this.setState({industry: "Wood Chopping"})}
                  className="list-item"
                  >Wood Chopping</li>
                <li 
                  onClick={()=>this.setState({industry: "Political Science"})}
                  className="list-item"
                  >Political Science</li>
                <li 
                  onClick={()=>this.setState({industry: "Biotech"})}
                  className="list-item"
                  >Biotech</li>
                <li 
                  onClick={()=>this.setState({industry: "Space Exploration"})}
                  className="list-item"
                  >Space Exploration</li>
              </ul>
            </div>
          </div>
          <footer className="session-footer">
            <h1>Are you a recruiter?</h1>
            <div className="recruiter-container">
              <button
                type="button"
                className="recruiter-button"
                value="true"
                onClick={()=>this.setState({recruiterStatus: "true"})}
              >Yes</button>
              <button
                type="button"
                className="recruiter-button"
                value="false"
                onClick={()=>this.setState({recruiterStatus: "false"})}
              >No</button>
            </div>
            <input 
              className="session-submit"
              type="submit"
              value="Create Account"
            />
          </footer>
          <div className="switch-form-container">
            Already created an account? {this.props.loginForm}
          </div>
        </div>
      </form>
    )
  }
}

export default withRouter(SignupForm);