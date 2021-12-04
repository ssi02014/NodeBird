import { PostActions, PostState } from "redux/types/postTypes";
import { postTypes } from "redux/Actiontypes/postActionTypes";

export const addPostRequestAction = (data: any) => {
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
        { src: "https://i.ibb.co/jyBfpfh/bird-of-paradise-flower-6632515-1280.jpg" },
        { src: "https://i.ibb.co/mzC8Ms9/cat-6576397-1280.jpg" },
        { src: "https://i.ibb.co/mzC8Ms9/cat-6576397-1280.jpg" },
        { src: "https://i.ibb.co/mzC8Ms9/cat-6576397-1280.jpg" },
        { src: "https://i.ibb.co/mzC8Ms9/cat-6576397-1280.jpg" },
      ],
      Comments: [
        {
          User: {
            nickname: 'minjae',
          },
          content: '우와 개정판이 나왔군요~1'
        },
        {
          User: {
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
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '제로초',
  },
  Images: [],
  Comments: [],
};

const PostReducer = (
  state = initialState, 
  action: PostActions
): PostState => {
  switch(action.type) {
    case postTypes.ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      }
    case postTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [ dummyPost, ...state.mainPosts ],
        addPostLoading: false,
        addPostDone: true,
      }
    case postTypes.ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      }
    case postTypes.ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      }
    case postTypes.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      }
    case postTypes.ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      }
    default:
      return state;
  }
}

export default PostReducer;