import logInWatcher from './logInSaga';
import signUpWatcher from './signUpSaga';
import {all} from 'redux-saga/effects';

function* rootWatcher() {
  yield all([logInWatcher(), signUpWatcher()]);
}

export default rootWatcher;
