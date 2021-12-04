import { all, delay, put, takeLatest, fork } from "@redux-saga/core/effects";
import axios from "axios";
import { postTypes } from '../Actiontypes/postActionTypes';

function addPostAPI(data: any) {
  return axios.post('/api/post', data);
}

function* addPost(action: any) {
  try {
    // const result:Generator = yield call(addPostAPI, action.data);
    yield delay(1000);
    yield put({
      type: postTypes.ADD_POST_SUCCESS,
      // data: result.data
    });
  } catch (err: any) {
    const { response }= err;
    yield put({
      type: postTypes.ADD_POST_FAILURE,
      data: response.data
    });
  }
}

function addCommentAPI(data: any) {
  return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action: any) {
  try {
    // const result:Generator = yield call(addCommentAPI, action.data);
    yield delay(1000);
    yield put({
      type: postTypes.ADD_COMMENT_SUCCESS,
      // data: result.data
    });
  } catch (err:any) {
    const { response }= err;
    yield put({
      type: postTypes.ADD_COMMENT_FAILURE,
      data: response.data
    });
  }
}

// watch
function* watchAddPost() {
  yield takeLatest(postTypes.ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
  yield takeLatest(postTypes.ADD_COMMENT_REQUEST, addComment);
}

export default function* postSage() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
  ]);
}