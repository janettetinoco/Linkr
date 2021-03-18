
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MyProfileContainer from './my_profile/my_profile_container';
import CompleteProfileContainer from './complete_profile/complete_profile_container';
import MainPageContainer from './main/main_page_container';
import ConnectionsContainer from './connections/connections_container';
import "../App.scss";
import Modal from './modal/modal_container';
import Splash from './splash/splash';
import AboutUs from './about/about_us'; 
import Chat from './chat/chat'

const App = () => (
  <div id="App">
    <header>
      <Modal />
      <NavBarContainer />
    </header>
   
        <AuthRoute exact path='/' component={Splash} />
        <ProtectedRoute exact path="/" component={MainPageContainer} />
    <Switch>
        <Route exact path="/about-us" component={AboutUs} />
        <ProtectedRoute exact path="/profile" component={MyProfileContainer} />
        <ProtectedRoute exact path="/profile/edit" component={CompleteProfileContainer} />
        <ProtectedRoute path="/profile/connections" component={ConnectionsContainer} />
    </Switch>
    <ProtectedRoute path="" component={Chat} />

    {/* <Chat /> */}
  </div>
);

export default App;