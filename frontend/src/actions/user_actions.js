
import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS'; 
export const RECEIVE_USERS_ERRORS='RECEIVE_USERS_ERRORS'; 
export const RECEIVE_SELF = 'RECEIVE_SELF';

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const receiveSelf = (self) => ({
  type: RECEIVE_SELF,
  self
})

export const receiveErrors = errors =>({
  type: RECEIVE_USERS_ERRORS,
  errors
})


//the goal is to find all near by users that live in the same city as
//the current user..
export const filterUsersBy = (filter,value) => dispatch => {
    return APIUtil.filterUsersBy(filter, value).then((users) => {
      dispatch(receiveUsers(users));
    },
    err => (
        dispatch(receiveErrors(err.response.data))
    ))
};

//get the profile of the currently logged in user 
export const getSelf = (myId) => dispatch => {

  return APIUtil.getCurrentUser(myId).then( (self) =>{
    dispatch(receiveSelf(self));
  },
    err => (
        dispatch(receiveErrors(err.response.data))
    ))
}

export const getConnected = (user) => dispatch => {
    return APIUtil.getConnected(user)
        .then(connectedUsers => dispatch(receiveUsers(connectedUsers))) 
        .catch(err => dispatch(receiveErrors(err.response.data)))
}