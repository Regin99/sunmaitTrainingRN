import {AUTH_ACTIONS_TYPES} from '../types';

const initialState = {
  isLoading: false,
  error: null,
  isLoggIn: false,
  isSignUp: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTIONS_TYPES.LOGIN_REQUEST:
    case AUTH_ACTIONS_TYPES.SIGNUP_REQUEST:
    case AUTH_ACTIONS_TYPES.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoggIn: false,
      };
    case AUTH_ACTIONS_TYPES.LOGIN_FAILURE:
    case AUTH_ACTIONS_TYPES.SIGNUP_FAILURE:
    case AUTH_ACTIONS_TYPES.LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isLoggIn: false,
      };
    case AUTH_ACTIONS_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        isLoggIn: true,
        user: action.payload,
      };

    case AUTH_ACTIONS_TYPES.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        isSignUp: true,
        isLoggIn: true,
        user: action.payload,
      };
    case AUTH_ACTIONS_TYPES.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        isLoggIn: false,
        isSignUp: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
