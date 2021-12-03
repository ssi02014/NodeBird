import { userTypes } from 'redux/Actiontypes/userActionTypes';
import { Data, UserActions, UserState } from "redux/types/userTypes";

export const loginRequestAction = (data: Data) => ({
  type: userTypes.LOG_IN_REQUEST,
  data,
});
export const loginSuccessAction = (data: Data) => ({
  type: userTypes.LOG_IN_SUCCESS,
  data,
});
export const loginFailureAction = (data: Data) => ({
  type: userTypes.LOG_IN_FAILURE,
  data,
});
export const logoutRequestAction = () => ({
  type: userTypes.LOG_OUT_REQUEST,
});
export const logoutSuccessAction = () => ({
  type: userTypes.LOG_OUT_SUCCESS,
});
export const logoutFailureAction = () => ({
  type: userTypes.LOG_OUT_FAILURE,
});

const initialState: UserState = {
  isLoggingIn: false,
  isLoggedIn: false,
  isLoggingOut: false,
  me: {
    id: 0,
    password: "",
    nickname: "",
  },
  signUpData : {},
  loginData: {},
};

// (이전 상태, 액션) => 다음 상태
const userReducer = (
  state = initialState, 
  action: UserActions
) => {
  switch(action.type) {
    case userTypes.LOG_IN_REQUEST: 
      return {
        ...state,
        isLoggingIn: true,
      }
    case userTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: { ...action.data, nickname: 'minjae'},
      }
    case userTypes.LOG_IN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
      }
    case userTypes.LOG_OUT_REQUEST: 
      return {
        ...state,
        isLoggingOut: true,
      }
    case userTypes.LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: {
          id: 0,
          password: "",
          nickname: ""
        },
      }
    case userTypes.LOG_OUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
      }
    default:
      return state;
  }
}

export default userReducer;