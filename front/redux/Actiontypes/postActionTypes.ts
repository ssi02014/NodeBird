export const postTypes = {
  LOAD_POSTS_REQUEST: "LOAD_POSTS_REQUEST",
  LOAD_POSTS_SUCCESS: "LOAD_POSTS_SUCCESS",
  LOAD_POSTS_FAILURE: "LOAD_POSTS_FAILURE",
  ADD_POST_REQUEST: "ADD_POST_REQUEST",
  ADD_POST_SUCCESS: "ADD_POST_SUCCESS",
  ADD_POST_FAILURE: "ADD_POST_FAILURE",
  ADD_COMMENT_REQUEST: "ADD_COMMENT_REQUEST",
  ADD_COMMENT_SUCCESS: "ADD_COMMENT_SUCCESS",
  ADD_COMMENT_FAILURE: "ADD_COMMENT_FAILURE",
  REMOVE_POST_REQUEST: "REMOVE_POST_REQUEST",
  REMOVE_POST_SUCCESS: "REMOVE_POST_SUCCESS",
  REMOVE_POST_FAILURE: "REMOVE_POST_FAILURE",
} as const;