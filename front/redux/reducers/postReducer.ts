import { PostActions, PostState } from "redux/types/postTypes";
import { postTypes } from "redux/Actiontypes/postActionTypes";
import produce from "immer";

export const addPostRequestAction = (data: string) => {
  return {
    type: postTypes.ADD_POST_REQUEST,
    data,
  }
}

const initialState: PostState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '제로초',
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        { id: 1, src: "https://i.ibb.co/jyBfpfh/bird-of-paradise-flower-6632515-1280.jpg" },
        { id: 2, src: "https://i.ibb.co/mzC8Ms9/cat-6576397-1280.jpg" },
        { id: 3, src: "https://i.ibb.co/mzC8Ms9/cat-6576397-1280.jpg" },
        { id: 4, src: "https://i.ibb.co/mzC8Ms9/cat-6576397-1280.jpg" },
        { id: 5, src: "https://i.ibb.co/mzC8Ms9/cat-6576397-1280.jpg" },
      ],
      Comments: [
        {
          id: 1,
          User: {
            id: 1,
            nickname: 'minjae',
          },
          content: '우와 개정판이 나왔군요~1'
        },
        {
          id: 2,
          User: {
            id: 2,
            nickname: 'yeonjae',
          },
          content: '우와 개정판이 나왔군요~2'
        }
      ],
    }
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: false,
  removePostLoading: false,
  removePostDone: false,
  removePostError: false,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: false,
};

let globalNum = 2;
const dummyPost = (data: string) => {
  return {
    id: globalNum++,
    content: data,
    User: {
      id: 1,
      nickname: '제로초',
    },
    Images: [],
    Comments: [],
  }
};

const dummyComment = (content: string) => {
  return {
    id: 1,
    User: {
      id:1,
      nickname: "minjae"
    },
    content: content
  }
}

const PostReducer = (
  state = initialState, 
  action: PostActions
): PostState => {
  return produce(state, (draft) => {
    switch (action.type) {
      case postTypes.ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = false;
        break;
      case postTypes.ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        // draft.mainPosts = [ dummyPost(action.data.content), ...state.mainPosts ];
        draft.mainPosts.unshift(dummyPost(action.data.content));
        break;
      case postTypes.ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case postTypes.ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = false;
        break;
      case postTypes.ADD_COMMENT_SUCCESS: 
        const post = draft.mainPosts.find((v) => v.id === action.data.postId);
        post?.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      case postTypes.ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      case postTypes.REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = false;
        break;
      case postTypes.REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter((v:any) => v.id !== action.data.id);
        break;
      case postTypes.REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      default:
        draft;
        break;
    }
  });
}

export default PostReducer;