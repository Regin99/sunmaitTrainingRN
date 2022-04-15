import logInWatcher from './logInSaga';
import signUpWatcher from './signUpSaga';
import logOutWatcher from './logOutSaga';
import {all} from 'redux-saga/effects';

function* rootWatcher() {
  yield all([logInWatcher(), signUpWatcher(), logOutWatcher()]);
}

export default rootWatcher;
