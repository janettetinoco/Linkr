import React from 'react';

class CompleteProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      occupation: '',
      education: '',
      aboutMe: '',
      linkedIn: '',
      id: this.props.myId 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  

  handleSubmit(e) {
    e.preventDefault();
  
    this.props.completeProfile(this.state)
      .then(() => this.props.history.push('/profile'));
  };  

  render(){
    return(
      <div id="complete-profile-form">
        <form className="complete-profile-form" onSubmit={this.handleSubmit}>
          <div>

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
            <textarea
              className="complete-profile-input"
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
export default CompleteProfile;