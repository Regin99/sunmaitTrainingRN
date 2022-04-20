import {AUTH_ACTIONS_TYPES} from '../actionTypes';
import {IError, IUserData} from '../types';

const signUpRequest = (userData: IUserData) => ({
  type: AUTH_ACTIONS_TYPES.SIGNUP_REQUEST,
  payload: userData,
});
const signUpSuccess = (userData: IUserData) => ({
  type: AUTH_ACTIONS_TYPES.SIGNUP_SUCCESS,
  payload: userData,
});

const signUpFailure = (error: IError) => ({
  type: AUTH_ACTIONS_TYPES.SIGNUP_FAILURE,
  payload: error,
});

export const signUpActions = {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
};
