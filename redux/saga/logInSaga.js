import {AUTH_ACTIONS_TYPES} from '../types';
import {loginActions} from '../actions/logInActions';
import {put, call, takeEvery} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {logInSuccess, logInFailure} = loginActions;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const logInUser = userData => {
  const {email, password} = userData;
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('users', (err, result) => {
      if (err) {
        reject(new Error('No users in storage'));
      } else {
        const usersArray = JSON.parse(result);
        if (usersArray) {
          const foundedUser = usersArray.find(
            user => user.email === email && user.password === password,
          );
          if (foundedUser) {
            resolve(foundedUser);
          } else {
            reject(new Error('Wrong email or password'));
          }
        } else {
          reject(new Error('No users in storage'));
        }
      }
    });
  });
};

function* logInWorker(action) {
  const userData = action.payload;
  try {
    yield call(delay, 1000);
    const user = yield call(logInUser, userData);
    yield put(logInSuccess(user));
  } catch (err) {
    yield put(logInFailure(err.message));
  }
}

function* logInWatcher() {
  yield takeEvery(AUTH_ACTIONS_TYPES.LOGIN_REQUEST, logInWorker);
}

export default logInWatcher;
