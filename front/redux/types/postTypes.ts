import { postTypes } from "redux/Actiontypes/postActionTypes";

export interface ImageSrc {
  id: number;
  src: string;
};

export interface Comments {
  id: number;
  User: {
    id: number | string;
    nickname: string;
  },
  content: string;
};

export interface MainPosts {
  id: number | string;
  User: {
    id: number;
    nickname: string;
  }
  content: string;
  Images: ImageSrc[];
  Comments: Comments[];
};

export interface PostState {
  mainPosts: MainPosts[];
  imagePaths: string[];
  hasMorePost: boolean;
  loadPostsLoading: boolean;
  loadPostsDone: boolean;
  loadPostsError: boolean;
  addPostLoading: boolean;
  addPostDone: boolean;
  addPostError: boolean;
  removePostLoading: boolean,
  removePostDone: boolean,
  removePostError: boolean;
  addCommentLoading: boolean,
  addCommentDone: boolean,
  addCommentError: boolean;
};

export interface AddPostRequest {
  type: typeof postTypes.ADD_POST_REQUEST;
}

export interface AddPostSuccess {
  type: typeof postTypes.ADD_POST_SUCCESS;
  data: any;
}

export interface AddPostFailure {
  type: typeof postTypes.ADD_POST_FAILURE;
  error: any;
}

export interface AddCommentRequest {
  type: typeof postTypes.ADD_COMMENT_REQUEST;
}

export interface AddCommentSuccess {
  type: typeof postTypes.ADD_COMMENT_SUCCESS;
  data: any;
}

export interface AddCommentFailure {
  type: typeof postTypes.ADD_COMMENT_FAILURE;
  error: any;
}

export interface RemovePostRequest {
  type: typeof postTypes.REMOVE_POST_REQUEST;
}

export interface RemovePostSuccess {
  type: typeof postTypes.REMOVE_POST_SUCCESS;
  data: any;
}

export interface RemovePostFailure {
  type: typeof postTypes.REMOVE_POST_FAILURE;
  error: any;
}

export interface LoadPostsRequest {
  type: typeof postTypes.LOAD_POSTS_REQUEST;
}

export interface LoadPostsSuccess {
  type: typeof postTypes.LOAD_POSTS_SUCCESS;
  data: MainPosts[];
}

export interface LoadPostsFailure {
  type: typeof postTypes.LOAD_POSTS_FAILURE;
  error: any;
}

export type PostActions = 
  AddPostRequest |
  AddPostSuccess |
  AddPostFailure |
  AddCommentRequest |
  AddCommentSuccess |
  AddCommentFailure |
  RemovePostRequest |
  RemovePostSuccess |
  RemovePostFailure |
  LoadPostsRequest |
  LoadPostsSuccess |
  LoadPostsFailure;