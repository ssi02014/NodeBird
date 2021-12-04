import { all, fork } from 'redux-saga/effects';
import postSage from './postSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(postSage)
  ]);
}