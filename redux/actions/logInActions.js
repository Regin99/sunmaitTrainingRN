import {AUTH_TYPES} from '../types';

const {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} = AUTH_TYPES;

const logInRequest = userData => ({
  type: LOGIN_REQUEST,
  payload: userData,
});

const logInSuccess = () => ({
  type: LOGIN_SUCCESS,
});

const logInFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginActions = {
  logInRequest,
  logInSuccess,
  logInFailure,
};
