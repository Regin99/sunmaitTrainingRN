import {AUTH_ACTIONS_TYPES} from '../types';

const initialState = {
  isLoading: false,
  error: null,
  isLoggIn: false,
  isSignUp: false,
};

const authReducer = (state = initialState, action) => {
  const {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
  } = AUTH_ACTIONS_TYPES;

  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoggIn: false,
      };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isLoggIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        isLoggIn: true,
        user: action.payload,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        isSignUp: true,
        isLoggIn: true,
        user: action.payload,
      };
    case LOGOUT_SUCCESS:
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
