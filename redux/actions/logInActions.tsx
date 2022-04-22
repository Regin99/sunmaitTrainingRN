import {AUTH_ACTIONS_TYPES} from '../actionTypes';
import {IError, IUserData} from '../types';

const logInRequest = (userData: IUserData) => ({
  type: AUTH_ACTIONS_TYPES.LOGIN_REQUEST,
  payload: userData,
});

const logInSuccess = (userData: IUserData) => ({
  type: AUTH_ACTIONS_TYPES.LOGIN_SUCCESS,
  payload: userData,
});

const logInFailure = (error: IError) => ({
  type: AUTH_ACTIONS_TYPES.LOGIN_FAILURE,
  payload: error,
});

export const loginActions = {
  logInRequest,
  logInSuccess,
  logInFailure,
};
