import { all, fork, delay, put, takeLatest } from "@redux-saga/core/effects";
import axios from 'axios';

// interface Generator {
//   data: string
// }
// function loginAPI(data: any) {
//   return axios.post('/api/login');
// }

function* login(action: any) {
  try {
    // const result:Generator = yield call(loginAPI, action.data);
    yield delay(1000);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: action.data,
    });
  } catch (err:any) {
    const { response }= err;
    yield put({
      type: 'LOG_IN_FAILURE',
      data: response.data
    });
  }
}

function* logout() {
  try {
    // const result:Generator = yield call(loginAPI, action.data);
    yield delay(1000);
    yield put({
      type: 'LOG_OUT_SUCCESS',
      // data: result.data
    });
  } catch (err:any) {
    const { response }= err;
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: response.data
    });
  }
}

function* watchLogin() {
  yield takeLatest('LOG_IN_REQUEST', login);
}

function* watchLogout() {
  yield takeLatest('LOG_OUT_REQUEST', logout);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
  ]);
}