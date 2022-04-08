import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST} from '../types';

export const logInRequest = (email, password) => {
  return {
    type: LOGIN_REQUEST,
    payload: {
      email,
      password,
    },
  };
};

export const logInSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const logInFailure = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};
