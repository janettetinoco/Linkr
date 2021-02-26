import React from 'react';

class CompleteProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      occupation: '',
      education: '',
      aboutMe: '',
      linkedIn: '', 
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  
    this.props.completeProfile(user)
      .then(() => this.props.history.push('/'));
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

  componentDidMount() {
    this.props.resetErrors()
  }
  

  render(){
    return(
      <div id="complete-profile-form">
        <form className="complete-profile-form" onSubmit={this.handleSubmit}>
          <div>
            {this.renderErrors()}

            <input type="file" onChange={this.handleFile}/>}
            <input
              className="complete-profile-input"
              type="text"
              placeholder="Occupation"
              value={this.state.occupation}
              onChange={this.update('occupation')}
            />
   
            <input
              className="complete-profile-input"
              type="text"
              placeholder="Education"
              value={this.state.education}
              onChange={this.update('education')}
            />
            <input
              className="complete-profile-input"
              type="text"
              placeholder="About me"
              value={this.state.business}
              onChange={this.update('aboutMe')}
            />
       
            <input
              className="complete-profile-input"
              type="text"
              placeholder="linkedIn"
              value={this.state.city}
              onChange={this.update('linkedIn')}
            />
            <footer className="complete-profile-footer">
 
              <input 
                className="complete-profile-submit"
                type="submit"
                value="Complete Profile"
              />
            </footer>
          </div>
        </form>
      </div>
    )
  }
}