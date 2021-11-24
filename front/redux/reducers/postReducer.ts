import { PostState } from "redux/interface/post";
import { ADD_POST } from "redux/types";

const initialState: PostState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '제로초',
      },
      content: "첫 번째 게시글 #해시태그, #익스프레스",
      Images: [
        { src: "https://pixabay.com/get/g388d683d55cb95a354fd307f40e3966f3a384c3b303bf0a41b56fdf125ca6a5507fe75d07945a9393a5764f95e629281501007853a4c88c1a4e4cc459ed79d65bbbe9d09e0f9a8d930d4d4eb5ec869e0_1920.jpg" },
        { src: "https://pixabay.com/get/g5ae934c107575cc860abd9ffffb0d6091575bb55a029b3a528c359d3480b412a47bae534d09e80a0e8915b2c21c35863d23c79ae5eeceadeeecda55de4a1a09b014aa4666029e8052669d85733f21872_1920.jpg" },
        { src: "https://pixabay.com/get/g8df7c72b57c639473c3e18697382e2a83d2ca73b3add6cac4e0436219d354d0eb407a89a72974b4c16831338463b82427b6f7bf4d96f74cba96084928fc0e977_1920.jpg" },
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

export const addPost = () => {
  return {
    type: ADD_POST,
  }
}

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '제로초',
  },
  Image: [],
  Comments: [],
}

// type PostAction
type PostAction = ReturnType<typeof addPost>

const PostReducer = (state = initialState, action: PostAction) => {
  switch(action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPost: [ dummyPost, ...state.mainPosts ],
        postAdded: true,
      }
    default:
      return state;
  }
}

export default PostReducer;