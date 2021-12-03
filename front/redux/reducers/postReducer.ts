import { PostActions, PostState } from "redux/types/postTypes";
import { postTypes } from "redux/Actiontypes/postActionTypes";

export const addPostRequestAction = () => {
  return {
    type: postTypes.ADD_POST_REQUEST,
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
  postAdded: false,
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
) => {
  switch(action.type) {
    case postTypes.ADD_POST_REQUEST:
      return {
        ...state,
        mainPosts: [ dummyPost, ...state.mainPosts ],
        postAdded: true,
      }
    default:
      return state;
  }
}

export default PostReducer;