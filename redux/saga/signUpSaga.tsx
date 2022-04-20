import {AUTH_ACTIONS_TYPES} from '../actionTypes';
import {signUpActions} from '../actions/signUpActions';
import {call, put, takeEvery} from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {IUserData} from '../types';

const {signUpSuccess, signUpFailure} = signUpActions;

const signUpUser = (userData: IUserData) => {
  const {email, number, password, avatar} = userData;
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      const userId = res.user.uid;
      firestore().collection('users').doc(userId).set({
        email,
        number,
        avatar,
      });
      return userId;
    })
    .catch(error => {
      throw new Error(error.message);
    });
};

interface ISignUpAction {
  type: string;
  payload: IUserData;
}

function* signUpWorker(action: ISignUpAction) {
  const userData = action.payload;
  try {
    yield call(signUpUser, userData);
    yield put(signUpSuccess(userData));
  } catch (err) {
    if (err instanceof Error) {
      yield put(signUpFailure(err));
    } else {
      console.log(err);
    }
  }
}

function* signUpWatcher() {
  yield takeEvery(AUTH_ACTIONS_TYPES.SIGNUP_REQUEST, signUpWorker);
}

export default signUpWatcher;
