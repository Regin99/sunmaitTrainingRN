import {AUTH_ACTIONS_TYPES} from '../types';

const {LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE} = AUTH_ACTIONS_TYPES;

const logOutRequest = () => ({
  type: LOGOUT_REQUEST,
});

const logOutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

const logOutFailure = error => ({
  type: LOGOUT_FAILURE,
  payload: error,
});

export const logOutActions = {
  logOutRequest,
  logOutSuccess,
  logOutFailure,
};
