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
  Followings: any[]
  Followers: any[]
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
  me: Data | null;
  signUpData : Object;
  loginData: Object;
};

export interface LoginRequestAction {
  type: typeof userTypes.LOG_IN_REQUEST;
  data: any;
}

export interface LoginSuccessAction {
  type: typeof userTypes.LOG_IN_SUCCESS;
  data: any;
}

export interface LoginFailureAction {
  type: typeof userTypes.LOG_IN_FAILURE;
  error: any;
}

export interface LogoutRequestAction {
  type: typeof userTypes.LOG_OUT_REQUEST;
  data: any;
}

export interface LogoutSuccessAction {
  type: typeof userTypes.LOG_OUT_SUCCESS;
  data: any;
}

export interface LogoutFailureAction {
  type: typeof userTypes.LOG_OUT_FAILURE;
  error: any;
}

export interface signupRequestAction {
  type: typeof userTypes.SIGN_UP_REQUEST;
  data: any;
}

export interface signupSuccessAction {
  type: typeof userTypes.SIGN_UP_SUCCESS;
  data: any;
}

export interface signupFailureAction {
  type: typeof userTypes.SIGN_UP_FAILURE;
  error: any;
}

export interface changeNicknameRequestAction {
  type: typeof userTypes.CHANGE_NICKNAME_REQUEST;
  data: any;
}

export interface changeNicknameSuccessAction {
  type: typeof userTypes.CHANGE_NICKNAME_SUCCESS;
  data: any;
}

export interface changeNicknameFailureAction {
  type: typeof userTypes.CHANGE_NICKNAME_FAILURE;
  error: any;
}

export type UserActions = 
  LoginRequestAction | 
  LoginSuccessAction | 
  LoginFailureAction | 
  LogoutRequestAction | 
  LogoutSuccessAction | 
  LogoutFailureAction |
  signupRequestAction |
  signupSuccessAction |
  signupFailureAction |
  changeNicknameRequestAction |
  changeNicknameSuccessAction |
  changeNicknameFailureAction;


