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
      imageUrl: "https://linkr-dev.s3-us-west-1.amazonaws.com/isgpp_avatar_placeholder.png",
    };
    this.industries = ['Healthcare', 'Arts', 'Audio/Video Tech', 'Communications', 'Manufacturing', 'Information Tech', 'Agriculture', 'Education', 'Real Estate', 'Retail', 'Education', 'Government', 'Biological Science', 'Software Engineering', ];
    this.cities = ['New York', 'Dallas', 'San Francisco']; 
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
    }
    user.imageUrl = this.state.imageUrl ? this.state.imageUrl : "https://linkr-dev.s3-us-west-1.amazonaws.com/isgpp_avatar_placeholder.png";
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
          this.props.login(user).then(this.props.openModal('welcome'));
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
    // let namePlaceholder = "Full Name";
    let nameClassName = "signup-input"
    // let emailPlaceholder = "Email";
    let emailClassName = "signup-input";
    // let passwordPlaceholder = "Password";
    let passwordClassName = "signup-input";
    if (this.props.errors.name) {
      // namePlaceholder = this.props.errors.name;
      nameClassName = "signup-input-error";
    }
    if (this.props.errors.email) {
      // emailPlaceholder = this.props.errors.email;
      emailClassName = "signup-input-error";
    }
    if (this.props.errors.password) {
      // passwordPlaceholder = this.props.errors.password;
      passwordClassName = "signup-input-error";
    }

    let industryOptions = this.industries.map( (industry,key)=>{
      <option key={key} value={industry} id="industry-option">{industry}</option>
    });
    let cityOptions = this.cities.map( (city, key)=>{
      <option key={key} value={city} id="city-option">{city}</option>
    })
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <div>
          {/* {this.renderErrors()} */}
          <p className="welcome-message">
            Welcome To Linkr!
          </p>

          <div id="image-preview">{preview}</div>
          <p className="field-errors">
            {this.props.errors.name ? this.props.errors.name : null}
          </p>
          <input
            className={nameClassName}
            type="text"
            placeholder="Full Name"
            value={this.state.name}
            onChange={this.update('name')}
          />
          <p className="field-errors">
            {this.props.errors.email ? this.props.errors.email : null}
          </p>
          <input
            className={emailClassName}
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update('email')}
          />
          <p className="field-errors">
            {this.props.errors.password ? this.props.errors.password : null}
          </p>
          <input
            className={passwordClassName}
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')}
          />
          <p className="field-errors">
            {this.props.errors.city ? this.props.errors.city : null}
          </p>
          <p className="field-errors">
            {this.props.errors.industry ? this.props.errors.industry : null}
          </p>
          <div className="city-industry-container">
            <select id="city-input" onChange={this.handleChange}>
              {cityOptions}
            </select>
            <select id="industry-input" onChange={this.handleChange}>
              {industryOptions}
            </select>
          </div>
          <footer className="session-footer">

            <div className="choose-file">Upload Profile Image
              <input type="file" onChange={this.handleFile}/>
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