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
      industry: '',
      city: '',
      imageFile: null,
      imageUrl: "https://linkr-dev.s3-us-west-1.amazonaws.com/isgpp_avatar_placeholder.png",
    };
    this.industries = ['Healthcare', 'Arts', 'Audio/Video Tech', 'Communications', 'Manufacturing', 'Information Tech', 'Agriculture', 'Education', 'Real Estate', 'Retail', 'Education', 'Government', 'Biological Science', 'Software Engineering', ];
    this.cities = ['New York', 'Dallas', 'San Francisco']; 
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleFile = this.handleFile.bind(this);
    this.clickFile = this.clickFile.bind(this); 
    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(field){
    return (e)=>{
      this.setState({[field]: e.target.value}); 
    }
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

  clickFile(e){
    e.preventDefault();
    document.getElementById('input-file').click();
  }
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.resetErrors(); 
    let user = {
      name: this.state.name.trim(),
      email: this.state.email.trim(),
      password: this.state.password.trim(),
      industry: this.state.industry.trim(),
      recruiterStatus: '',
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
        console.log(this.props.errors);
        if(this.props.signedIn){
          this.props.login(user).then(this.props.openModal('welcome'));
          // this.props.history.push('/');
        }
        Object.keys(this.state).forEach((field)=>{
          if(this.props.errors[field]){
            user[field] =''; 
          }
        });
        this.setState({name:user.name,email:user.email,password:user.password,city:user.city,industry:user.industry});
      });
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

    let cityIndustryErrors = 'is required';
    let i = document.getElementById('industry-input');
    if(this.props.errors.industry){
      cityIndustryErrors = "Industry "+cityIndustryErrors;
      if(i){document.getElementById('industry-input').classList.add('signup-input-error');}
    }
    else{
      
      if(i) {i.classList.remove('signup-input-error');}
    }
    let c = document.getElementById('city-input');
    if(this.props.errors.city){
      cityIndustryErrors = "City " + cityIndustryErrors;
      if(c){document.getElementById('city-input').classList.add('signup-input-error');}
    }
    else{
      if(c){c.classList.remove('signup-input-error');}

    }
    if(this.props.errors.city && this.props.errors.industry){
      cityIndustryErrors = "City & Industry are required";
    }
    let industryOptions = this.industries.map( (industry,key)=>{
      return <option key={key} value={industry} id="industry-option">{industry}</option>
    });
    let cityOptions = this.cities.map( (city, key)=>{
      return <option key={key} value={city} id="city-option">{city}</option>
    })
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <div>
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
            {this.props.errors.industry || this.props.errors.city ? cityIndustryErrors : null}
          </p>
          <div className="city-industry-container">
            <select className="city-industry-input" id="city-input" onChange={this.handleChange('city')}>
              <option value='' id="city-option">Select City</option>
              {cityOptions}
            </select>
            <select className="city-industry-input" id="industry-input" onChange={this.handleChange('industry')}>
              <option value='' id="industry-option">Select Industry</option>
              {industryOptions}
            </select>

          </div>
          <footer className="session-footer">
              <input type="file" id='input-file' onChange={this.handleFile}/>
              <button className="choose-file" onClick={this.clickFile}>
                Upload Image
              </button>
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