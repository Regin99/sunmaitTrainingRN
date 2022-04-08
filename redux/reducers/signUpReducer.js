import {SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS} from '../types';

const initialState = {
  isLoading: false,
  error: null,
  isSignUp: false,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        isSignUp: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        isSignUp: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isSignUp: false,
      };
    default:
      return state;
  }
};

export default signUpReducer;
