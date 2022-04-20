import {AUTH_ACTIONS_TYPES} from '../actionTypes';
import {IError} from '../types';

const logOutRequest = () => ({
  type: AUTH_ACTIONS_TYPES.LOGOUT_REQUEST,
});

const logOutSuccess = () => ({
  type: AUTH_ACTIONS_TYPES.LOGOUT_SUCCESS,
});

const logOutFailure = (error: IError) => ({
  type: AUTH_ACTIONS_TYPES.LOGOUT_FAILURE,
  payload: error,
});

export const logOutActions = {
  logOutRequest,
  logOutSuccess,
  logOutFailure,
};
