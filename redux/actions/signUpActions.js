import {AUTH_ACTIONS_TYPES} from '../types';

const signUpRequest = userData => ({
  type: AUTH_ACTIONS_TYPES.SIGNUP_REQUEST,
  payload: userData,
});
const signUpSuccess = userData => ({
  type: AUTH_ACTIONS_TYPES.SIGNUP_SUCCESS,
  payload: userData,
});

const signUpFailure = error => ({
  type: AUTH_ACTIONS_TYPES.SIGNUP_FAILURE,
  payload: error,
});

export const signUpActions = {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
};
