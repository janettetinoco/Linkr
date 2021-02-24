
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';


import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainPageContainer from './main/main_page_container';

import "../App.scss";
import Modal from './modal/modal_container';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
      <Modal />
    </header>
    <Switch>
        <ProtectedRoute exact path="/" component={MainPageContainer} />
    </Switch>
  </div>
);

export default App;