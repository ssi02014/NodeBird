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
};

export interface UserState {
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  isLoggingOut: boolean;
  me: Data;
  signUpData : Object;
  loginData: Object;
};

export interface LoginRequestAction {
  type: typeof userTypes.LOG_IN_REQUEST;
  data: Data;
}

export interface LoginSuccessAction {
  type: typeof userTypes.LOG_IN_SUCCESS;
  data: Data;
}

export interface LoginFailureAction {
  type: typeof userTypes.LOG_IN_FAILURE;
  data: Data;
}

export interface LogoutRequestAction {
  type: typeof userTypes.LOG_OUT_REQUEST;
  data: Data;
}

export interface LogoutSuccessAction {
  type: typeof userTypes.LOG_OUT_SUCCESS;
  data: Data;
}

export interface LogoutFailureAction {
  type: typeof userTypes.LOG_OUT_FAILURE;
  data: Data;
}

export type UserActions = 
  LoginRequestAction | 
  LoginSuccessAction | 
  LoginFailureAction | 
  LogoutRequestAction | 
  LogoutSuccessAction | 
  LogoutFailureAction;


