import logInWatcher from './logIn';
import signUpWatcher from './signUp';
import logOutWatcher from './logOut';
import {all} from 'redux-saga/effects';

function* rootWatcher() {
  yield all([logInWatcher(), signUpWatcher(), logOutWatcher()]);
}

export default rootWatcher;
