import {AUTH_ACTIONS_TYPES} from '../types';

const {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} = AUTH_ACTIONS_TYPES;

const signUpRequest = userData => ({
  type: SIGNUP_REQUEST,
  payload: userData,
});
const signUpSuccess = userData => ({
  type: SIGNUP_SUCCESS,
  payload: userData,
});

const signUpFailure = error => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const signUpActions = {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
};
