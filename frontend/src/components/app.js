
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MyProfileContainer from './my_profile/my_profile_container';
import CompleteProfileContainer from './complete_profile/complete_profile_container';
import MainPageContainer from './main/main_page_container';
// import MyProfileContainer from './my_profile/my_profile_container';
import ConnectionsContainer from './connections/connections_container';
import "../App.scss";
import Modal from './modal/modal_container';
import FriendDetailContainer from './connections/friend_detail_container';
import Splash from './splash/splash';

const App = () => (
  <div>
    <header>
      <Modal />
      <NavBarContainer />
    </header>
        <ProtectedRoute path="/profile/connections/:friendId" component={FriendDetailContainer} />
        <AuthRoute exact path='/' component={Splash} />
        <ProtectedRoute exact path="/" component={MainPageContainer} />
    <Switch>
        <ProtectedRoute exact path="/profile" component={MyProfileContainer} />
        {/* <ProtectedRoute exact path="/profile" component={MyProfileContainer} /> */}
        <ProtectedRoute exact path="/profile/edit" component={CompleteProfileContainer} />
        <ProtectedRoute path="/profile/connections" component={ConnectionsContainer} />


    </Switch>
  </div>
);

export default App;