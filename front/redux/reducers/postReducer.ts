import { PostActions, PostState } from "redux/types/postTypes";
import { postTypes } from "redux/Actiontypes/postActionTypes";


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
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
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
  switch(action.type) {
    case postTypes.ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case postTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [ dummyPost(action.data.content), ...state.mainPosts ],
        addPostLoading: false,
        addPostDone: true,
      };
    case postTypes.ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case postTypes.ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case postTypes.ADD_COMMENT_SUCCESS: 
      const postIndex = state.mainPosts.findIndex((post) => post.id === action.data.postId);
      const post = { ...state.mainPosts[postIndex] };
      post.Comments = [dummyComment(action.data.content), ...post.Comments];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = post;

      return {
        ...state,
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case postTypes.ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    case postTypes.REMOVE_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        removePostDone: false,
        removePostError: null,
      };
    case postTypes.REMOVE_POST_SUCCESS:
      return {
        ...state,
        mainPosts: state.mainPosts.filter((v:any) => v.id !== action.data.id),
        removePostLoading: false,
        removePostDone: true,
      };
    case postTypes.REMOVE_POST_FAILURE:
      return {
        ...state,
        removePostLoading: false,
        removePostError: action.error,
      };
    default:
      return state;
  }
}

export default PostReducer;