import {logInFailure, logInSuccess} from '../actions/logInActions';
import {LOGIN_REQUEST} from '../types';
import {put, call, takeEvery} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const logInUser = (email, password) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('users', (err, result) => {
      if (err) {
        reject(err);
      } else {
        const usersArray = JSON.parse(result);
        if (usersArray) {
          if (
            usersArray.some(
              user => user.email === email && user.password === password,
            )
          ) {
            resolve(
              usersArray.find(
                user => user.email === email && user.password === password,
              ),
            );
          } else {
            reject(new Error('Wrong email or password'));
          }
        }
        reject(new Error('No users in storage'));
      }
    });
  });
};

function* logInWorker(action) {
  const {email, password} = action.payload;
  try {
    yield call(delay, 1000);
    const user = yield call(logInUser, email, password);
    yield put(logInSuccess(user));
  } catch (err) {
    yield put(logInFailure(err.message));
  }
}

function* logInWatcher() {
  yield takeEvery(LOGIN_REQUEST, logInWorker);
}

export default logInWatcher;
