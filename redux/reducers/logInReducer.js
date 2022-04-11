import {AUTH_TYPES} from '../types';

const initialState = {
  isLoggIn: false,
  isLoading: false,
  loginError: null,
  email: '',
  password: '',
};

const logInReducer = (state = initialState, action) => {
  const {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} = AUTH_TYPES;
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        email: action.payload.email,
        password: action.payload.password,
        loginError: null,
        isLoggIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loginError: null,
        isLoggIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        loginError: action.payload,
        isLoggIn: false,
      };
    default:
      return state;
  }
};

export default logInReducer;
