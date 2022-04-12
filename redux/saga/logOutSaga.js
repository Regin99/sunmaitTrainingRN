import {AUTH_TYPES} from '../types';
import {logOutActions} from '../actions/logOutActions';
import {put, takeEvery, call} from 'redux-saga/effects';

const {LOGOUT_REQUEST} = AUTH_TYPES;
const {logOutSuccess, logOutFailure} = logOutActions;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* logOutWorker(action) {
  try {
    yield call(delay, 1000);
    yield put(logOutSuccess());
  } catch (err) {
    yield put(logOutFailure(err.message));
  }
}

function* logOutWatcher() {
  yield takeEvery(LOGOUT_REQUEST, logOutWorker);
}

export default logOutWatcher;
