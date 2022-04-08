import signUpReducer from './signUpReducer';
import {combineReducers} from 'redux';
import logInReducer from './logInReducer';

const rootReducer = combineReducers({
  signUp: signUpReducer,
  logIn: logInReducer,
});

export default rootReducer;
