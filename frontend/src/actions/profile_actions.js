
import * as APIUtil from '../util/user_api_util';

export const RECEIVE_SELF = 'RECEIVE_SELF';

export const receiveSelf = (self) => ({
  type: RECEIVE_SELF,
  self
})

export const completeProfile = profile => dispatch => (
  APIUtil.completeProfile(profile)
);

export const updateProfile = profile => dispatch => (
  APIUtil.updateProfile(profile)
    .then(user => dispatch(receiveSelf(user)))
);

