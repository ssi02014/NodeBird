import { userTypes } from "redux/Actiontypes/userActionTypes";

/*
  모든 액션 객체들에 대한 타입을 준비해줍니다.
  ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
  상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이  제대로 작동하지 않습니다.
 */

export interface Data {
  id: number;
  password: string;
  nickname?: string;
  Posts: any[];
  Followings: { nickname: string }[]
  Followers: { nickname: string }[]
};

export interface UserState {
  logInLoading: boolean,
  logInDone: boolean,
  logInError: boolean | null,
  logOutLoading: boolean,
  logOutDone: boolean,
  logOutError: boolean | null,
  signUpLoading: boolean,
  signUpDone: boolean,
  signUpError: boolean | null,
  changeNicknameLoading: boolean,
  changeNicknameDone: boolean,
  changeNicknameError: boolean | null,
  me: any;
  signUpData : Object;
  loginData: Object;
};

export interface LoginRequest {
  type: typeof userTypes.LOG_IN_REQUEST;
  data: any;
}

export interface LoginSuccess {
  type: typeof userTypes.LOG_IN_SUCCESS;
  data: any;
}

export interface LoginFailure {
  type: typeof userTypes.LOG_IN_FAILURE;
  error: any;
}

export interface LogoutRequest {
  type: typeof userTypes.LOG_OUT_REQUEST;
  data: any;
}

export interface LogoutSuccess {
  type: typeof userTypes.LOG_OUT_SUCCESS;
  data: any;
}

export interface LogoutFailure {
  type: typeof userTypes.LOG_OUT_FAILURE;
  error: any;
}

export interface signupRequest {
  type: typeof userTypes.SIGN_UP_REQUEST;
  data: any;
}

export interface signupSuccess {
  type: typeof userTypes.SIGN_UP_SUCCESS;
  data: any;
}

export interface signupFailure {
  type: typeof userTypes.SIGN_UP_FAILURE;
  error: any;
}

export interface changeNicknameRequest {
  type: typeof userTypes.CHANGE_NICKNAME_REQUEST;
  data: any;
}

export interface changeNicknameSuccess {
  type: typeof userTypes.CHANGE_NICKNAME_SUCCESS;
  data: any;
}

export interface changeNicknameFailure {
  type: typeof userTypes.CHANGE_NICKNAME_FAILURE;
  error: any;
}

export interface addPostToMeRequset {
  type: typeof userTypes.ADD_POST_TO_ME;
  data: any;
}

export interface RemovePostOfMeRequset {
  type: typeof userTypes.REMOVE_POST_OF_ME;
  data: any;
}

export type UserActions = 
  LoginRequest | 
  LoginSuccess | 
  LoginFailure | 
  LogoutRequest | 
  LogoutSuccess | 
  LogoutFailure |
  signupRequest |
  signupSuccess |
  signupFailure |
  changeNicknameRequest |
  changeNicknameSuccess |
  changeNicknameFailure |
  addPostToMeRequset |
  RemovePostOfMeRequset;

