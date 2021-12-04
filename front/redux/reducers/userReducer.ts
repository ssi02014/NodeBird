import { userTypes } from 'redux/Actiontypes/userActionTypes';
import { Data, UserActions, UserState } from "redux/types/userTypes";
import { dummyUser } from 'utils/dummy';

export const loginRequestAction = (data: any) => ({
  type: userTypes.LOG_IN_REQUEST,
  data,
});

export const logoutRequestAction = () => ({
  type: userTypes.LOG_OUT_REQUEST,
});

const initialState: UserState = {
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  me: null,
  signUpData : {},
  loginData: {},
};

// (이전 상태, 액션) => 다음 상태
const userReducer = (
  state = initialState, 
  action: UserActions
): UserState => {
  switch(action.type) {
    case userTypes.LOG_IN_REQUEST: 
      return {
        ...state,
        logInLoading: true,
        logInError: null,
        logInDone: false,
      }
    case userTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data),
      }
    case userTypes.LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInError: action.error,
      }
    case userTypes.LOG_OUT_REQUEST: 
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
      }
    case userTypes.LOG_OUT_SUCCESS:
      return {
        ...state,
        logInDone: false,
        logOutLoading: false,
        logOutDone: true,
        me: null,
      }
    case userTypes.LOG_OUT_FAILURE:
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      }
    case userTypes.SIGN_UP_REQUEST: 
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
      }
    case userTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
      }
    case userTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      }
    default:
      return state;
  }
}

export default userReducer;