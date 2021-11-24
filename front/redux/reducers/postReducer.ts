import { PostState } from "redux/interface/post";

const initialState: PostState = {
  mainPosts: [],
};

// type PostAction

const PostReducer = (state = initialState, action: any) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default PostReducer;