import { all, delay, put, takeLatest, fork } from "@redux-saga/core/effects";
import axios from "axios";
import { userTypes } from "redux/Actiontypes/userActionTypes";
import { postTypes } from '../Actiontypes/postActionTypes';

function addPostAPI(data: any) {
  return axios.post('/api/post', data);
}

function* addPost(action: any) {
  console.log(action);
  try {
    // const result:Generator = yield call(addPostAPI, action.data);
    yield delay(1000);
    const id = 2;
    yield put({
      type: postTypes.ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data,
      }
    });
    yield put({
      type: userTypes.ADD_POST_TO_ME,
      data: id,
    });
  } catch (err: any) {
    const { response } = err;
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
      data: action.data
    });
  } catch (err:any) {
    const { response }= err;
    yield put({
      type: postTypes.ADD_COMMENT_FAILURE,
      data: response.data
    });
  }
}

function removePostAPI(data: any) {
  return axios.delete('/api/post', data);
}


function* removePost(action: any) {
  try {
    // const result:Generator = yield call(addCommentAPI, action.data);
    const id = 2;
    yield delay(1000);
    yield put({
      type: postTypes.REMOVE_POST_SUCCESS,
      data: {
        id,
        content: action.data,
      }
    });
    yield put({
      type: userTypes.REMOVE_POST_OF_ME,
      data: id,
    });
  } catch (err:any) {
    const { response } = err;
    yield put({
      type: postTypes.REMOVE_POST_FAILURE,
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

function* watchRemovePost() {
  yield takeLatest(postTypes.REMOVE_POST_REQUEST, removePost);
}

export default function* postSage() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
    fork(watchRemovePost),
  ]);
}