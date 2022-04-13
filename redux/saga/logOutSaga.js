import {AUTH_ACTIONS_TYPES} from '../types';
import {logOutActions} from '../actions/logOutActions';
import {put, takeEvery, call} from 'redux-saga/effects';

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
  yield takeEvery(AUTH_ACTIONS_TYPES.LOGOUT_REQUEST, logOutWorker);
}

export default logOutWatcher;
