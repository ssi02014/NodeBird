import { all, fork, delay, put, takeLatest } from "@redux-saga/core/effects";
import { userTypes } from "redux/Actiontypes/userActionTypes";
import axios from 'axios';

// interface Generator {
//   data: any
// }

function loginAPI(data: any) {
  return axios.post('/api/login');
}

function* login(action: any) {
  try {
    // const result:any = yield call(loginAPI, action.data);
    yield delay(1000);
    yield put({
      type: userTypes.LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err:any) {
    const { response } = err;
    yield put({
      type: userTypes.LOG_IN_FAILURE,
      error: response.data
    });
  }
}

function logoutAPI(data: any) {
  return axios.post('/api/logout');
}

function* logout() {
  try {
    // const result:any = yield call(logoutAPI);
    yield delay(1000);
    yield put({
      type: userTypes.LOG_OUT_SUCCESS,
    });
  } catch (err:any) {
    const { response } = err;
    yield put({
      type: userTypes.LOG_OUT_FAILURE,
      error: response.data
    });
  }
}

function signupAPI(data: any) {
  return axios.post('/api/signup');
}

function* signup(action: any) {
  try {
    // const result:any = yield call(signupAPI, action.data);
    yield delay(1000);
    yield put({
      type: userTypes.SIGN_UP_SUCCESS,
      data: action.data,
    });
  } catch (err:any) {
    const { response } = err;
    yield put({
      type: userTypes.SIGN_UP_FAILURE,
      error: response.data
    });
  }
}

// watch
function* watchLogin() {
  yield takeLatest(userTypes.LOG_IN_REQUEST, login);
}

function* watchLogout() {
  yield takeLatest(userTypes.LOG_OUT_REQUEST, logout);
}

function* watchSignup() {
  yield takeLatest(userTypes.SIGN_UP_REQUEST, signup);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchSignup),
  ]);
}