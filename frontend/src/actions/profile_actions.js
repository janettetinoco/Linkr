
import * as APIUtil from '../util/user_api_util';

export const completeProfile = profile => dispatch => (
  APIUtil.completeProfile(profile)
);

