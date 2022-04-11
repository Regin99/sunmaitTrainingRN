import {AUTH_TYPES} from '../types';

const {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} = AUTH_TYPES;

const signUpRequest = userData => ({
  type: SIGNUP_REQUEST,
  payload: userData,
});
const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
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
