import {AUTH_ACTIONS_TYPES} from '../types';

const logInRequest = userData => ({
  type: AUTH_ACTIONS_TYPES.LOGIN_REQUEST,
  payload: userData,
});

const logInSuccess = userData => ({
  type: AUTH_ACTIONS_TYPES.LOGIN_SUCCESS,
  payload: userData,
});

const logInFailure = error => ({
  type: AUTH_ACTIONS_TYPES.LOGIN_FAILURE,
  payload: error,
});

export const loginActions = {
  logInRequest,
  logInSuccess,
  logInFailure,
};
