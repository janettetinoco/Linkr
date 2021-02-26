
import React from 'react';
import { ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import CompleteProfileContainer from './complete_profile/complete_profile_container';
import MainPageContainer from './main/main_page_container';
// import MyProfileContainer from './my_profile/my_profile_container';
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
        {/* <ProtectedRoute exact path="/profile" component={MyProfileContainer} /> */}
        <ProtectedRoute exact path="/profile/edit" component={CompleteProfileContainer} />

    </Switch>
  </div>
);

export default App;