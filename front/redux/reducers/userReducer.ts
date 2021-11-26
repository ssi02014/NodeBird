import { LOG_IN, LOG_OUT } from "redux/types";
import { HYDRATE } from 'next-redux-wrapper';
import { Data, UserState } from "redux/interface/user";

const initialState: UserState = {
  isLoggedIn: false,
  me: null,
  signUpData : {},
  loginData: {},
};

export const loginAction = (data: Data) => ({
  type: LOG_IN,
  data,
});

export const logoutAction = () => ({
  type: LOG_OUT,
});

/*
  모든 액션 객체들에 대한 타입을 준비해줍니다.
  ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
  상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이  제대로 작동하지 않습니다.
 */

type UserAction = 
  ReturnType<typeof loginAction> | 
  ReturnType<typeof logoutAction> 

// (이전 상태, 액션) => 다음 상태
const userReducer = (
  state = initialState, 
  action: UserAction
) => {
  switch(action.type) {
    case LOG_IN: 
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      }
    case LOG_OUT: 
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      }
    default:
      return state;
  }
}

export default userReducer;