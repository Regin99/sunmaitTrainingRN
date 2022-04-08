import {signUpFailure, signUpSuccess} from '../actions/signUpActions';
import {call, put, takeEvery} from 'redux-saga/effects';
import {SIGNUP_REQUEST} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const signUpUser = (email, number, password, avatar) => {
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
  const {email, number, password, avatar} = action.payload;
  try {
    yield call(delay, 1000);
    yield call(signUpUser, email, number, password, avatar);
    yield put(signUpSuccess());
  } catch (err) {
    yield put(signUpFailure(err.message));
  }
}

function* signUpWatcher() {
  yield takeEvery(SIGNUP_REQUEST, signUpWorker);
}

export default signUpWatcher;
