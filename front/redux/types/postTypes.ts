import { postTypes } from "redux/Actiontypes/postActionTypes";

export interface ImageSrc {
  src: string;
};

export interface Comments {
  User: {
    nickname: string;
  },
  content: string;
};

export interface MainPosts {
  id: number;
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
  postAdded: boolean;
};

export interface AddPostRequest {
  type: typeof postTypes.ADD_POST_REQUEST;
}

export interface AddPostSuccess {
  type: typeof postTypes.ADD_POST_SUCCESS;
}

export interface AddPostFailure {
  type: typeof postTypes.ADD_POST_FAILURE;
}

export type PostActions = 
  AddPostRequest |
  AddPostSuccess |
  AddPostFailure;