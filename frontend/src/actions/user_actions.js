
import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS'; 
export const RECEIVE_USERS_ERRORS='RECEIVE_USERS_ERRORS'; 
export const RECEIVE_SELF = 'RECEIVE_SELF';
export const REMOVE_USER_FROM_STATE = 'REMOVE_USER_FROM_STATE'; 


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

export const removeUserState = userId => ({
  type: REMOVE_USER_FROM_STATE,
  userId
})

//when the user is swiped. it should be removed from the bank of users 
//to display to our  current user. remove from state 
export const removeUserFromState = (userId) => dispatch => {
  return dispatch(removeUserState(userId));
}

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