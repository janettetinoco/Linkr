import React from 'react';

import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import NewConnection from '../connections/new_connection';
import WelcomeTutorial from '../connections/welcome_tutorial';

function Modal({modal, closeModal}) {
    if (!modal) {
      return null;
    }
    let component;
    switch (modal) {
      case 'login':
        component = <LoginFormContainer />;
        break;
      case 'signup':
        component = <SignupFormContainer />;
        break;
      case 'connection':
        component = <NewConnection />
        break;
      case 'welcome':
        component = <WelcomeTutorial />
        break;
      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }

  export default Modal;