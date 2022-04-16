import {AUTH_ACTIONS_TYPES} from '../types';
import {signUpActions} from '../actions/signUpActions';
import {call, put, takeEvery} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {signUpSuccess, signUpFailure} = signUpActions;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const signUpUser = userData => {
  const {email, number, password, avatar} = userData;
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('users', (err, result) => {
      if (err) {
        reject(err);
      } else {
        const newUser = {
          email,
          number,
          password,
          avatar,
          id: Math.random(),
        };
        const usersArray = JSON.parse(result);
        if (usersArray) {
          if (usersArray.some(user => user.email === newUser.email)) {
            reject(new Error('User with this email already exists'));
          } else {
            usersArray.push(newUser);
            AsyncStorage.setItem('users', JSON.stringify(usersArray), () => {
              resolve();
            });
          }
        } else {
          AsyncStorage.setItem('users', JSON.stringify([newUser]), () => {
            resolve();
          });
        }
      }
    });
  });
};

function* signUpWorker(action) {
  const userData = action.payload;
  try {
    yield call(delay, 1000);
    yield call(signUpUser, userData);
    yield put(signUpSuccess(userData));
  } catch (err) {
    yield put(signUpFailure(err.message));
  }
}

function* signUpWatcher() {
  yield takeEvery(AUTH_ACTIONS_TYPES.SIGNUP_REQUEST, signUpWorker);
}

export default signUpWatcher;
