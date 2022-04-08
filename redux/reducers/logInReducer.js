import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST} from '../types';

const initialState = {
  isLoggIn: false,
  isLoading: false,
  error: null,
  email: '',
  password: '',
};

const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        email: action.payload.email,
        password: action.payload.password,
        error: null,
        isLoggIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        isLoggIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isLoggIn: false,
      };
    default:
      return state;
  }
};

export default logInReducer;
