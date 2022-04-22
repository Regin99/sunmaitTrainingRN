import {AUTH_ACTIONS_TYPES} from '../actionTypes';
import {logOutActions} from '../actions/logOutActions';
import {put, takeEvery, call} from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';

const {logOutSuccess, logOutFailure} = logOutActions;

function* logOutWorker() {
  try {
    yield call(() => auth().signOut());
    yield put(logOutSuccess());
  } catch (err) {
    if (err instanceof Error) {
      yield put(logOutFailure(err));
    }
  }
}

function* logOutWatcher() {
  yield takeEvery(AUTH_ACTIONS_TYPES.LOGOUT_REQUEST, logOutWorker);
}

export default logOutWatcher;
