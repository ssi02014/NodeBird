import { all, delay, put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";

// function addPostAPI(data: any) {
//   return axios.post('/api/post', data);
// }

function* addPost(action: any) {
  try {
    // const result:Generator = yield call(loginAPI, action.data);
    yield delay(1000);
    yield put({
      type: 'ADD_POST_SUCCESS',
      // data: result.data
    });
  } catch (err:any) {
    const { response }= err;
    yield put({
      type: 'ADD_POST_FAILURE',
      data: response.data
    });
  }
}

  function* watchPost() {
    yield takeLatest('ADD_POST_REQUEST', addPost);
  }

export default function* postSage() {
  yield all([
    watchPost,
  ]);
}