import {SIGNUP_FAILURE, SIGNUP_SUCCESS, SIGNUP_REQUEST} from '../types';

export const signUpRequest = (email, number, password, avatar) => {
  return {
    type: SIGNUP_REQUEST,
    payload: {
      email,
      number,
      password,
      avatar,
    },
  };
};
export const signUpSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};
export const signUpFailure = error => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};
