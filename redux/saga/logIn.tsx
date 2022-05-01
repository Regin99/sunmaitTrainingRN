import {AUTH_ACTIONS_TYPES} from '../actionTypes';
import {loginActions} from '../actions/logInActions';
import {put, call, takeEvery} from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {IUserData} from '../types';
const {logInSuccess, logInFailure} = loginActions;

const logInUser = (userData: IUserData) => {
  const {email, password} = userData;
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      const userId = res.user.uid;
      return firestore()
        .collection('users')
        .doc(userId)
        .get()
        .then(doc => {
          const user = doc.data();
          return user;
        });
    })
    .catch(error => {
      throw new Error(error);
    });
};

interface ILogInAction {
  type: string;
  payload: IUserData;
}

function* logInWorker(action: ILogInAction) {
  const userData = action.payload;
  try {
    const user: IUserData = yield call(logInUser, userData);
    yield put(logInSuccess(user));
  } catch (err) {
    if (err instanceof Error) {
      yield put(logInFailure(err));
    }
  }
}

function* logInWatcher() {
  yield takeEvery(AUTH_ACTIONS_TYPES.LOGIN_REQUEST, logInWorker);
}

export default logInWatcher;
