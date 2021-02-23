
import * as APIUtil from '../util/user_api_util';
import jwt_decode from 'jwt-decode';

const RECEIVE_USERS = 'RECEIVE_USERS'; 

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const signup = user => dispatch => (
    APIUtil.signup(user).then(() => (
        dispatch(receiveUserSignIn())
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ))
);
