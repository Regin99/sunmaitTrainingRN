import {AUTH_TYPES} from '../types';

const initialState = {
  isLoading: false,
  signError: null,
  isSignUp: false,
};

const signUpReducer = (state = initialState, action) => {
  const {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} = AUTH_TYPES;
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        signError: null,
        isSignUp: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signError: null,
        isSignUp: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        signError: action.payload,
        isSignUp: false,
      };
    default:
      return state;
  }
};

export default signUpReducer;
