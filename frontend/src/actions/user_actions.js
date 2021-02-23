
import * as APIUtil from '../util/user_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_USERS = 'RECEIVE_USERS'; 
export const RECEIVE_USERS_ERRORS='RECEIVE_USERS_ERRORS'; 

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const receiveErrors = errors =>({
  type: RECEIVE_USERS_ERRORS,
  errors
})


//the goal is to find all near by users that live in the same city as
//the current user..
export const populateNearByUsers = city => dispatch => (
    APIUtil.getUsersByCity(city).then((users) => (
        dispatch(receiveUsers(users))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);
