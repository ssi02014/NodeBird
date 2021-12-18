import { userTypes } from 'redux/Actiontypes/userActionTypes';
import { UserActions, UserState } from "redux/types/userTypes";
import { dummyUser } from 'utils/dummy';
import produce from 'immer';

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
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData : {},
  loginData: {},
};

// (이전 상태, 액션) => 다음 상태
const userReducer = (
  state = initialState, 
  action: UserActions
): UserState => {
  return produce(state, (draft) => {
    switch (action.type) {
      case userTypes.LOG_IN_REQUEST: 
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = false;
        break;
      case userTypes.LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
        break;
      case userTypes.LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case userTypes.LOG_OUT_REQUEST: 
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = false;
        break;
      case userTypes.LOG_OUT_SUCCESS:
        draft.logInDone = false;
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      case userTypes.LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case userTypes.SIGN_UP_REQUEST: 
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case userTypes.SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case userTypes.SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case userTypes.CHANGE_NICKNAME_REQUEST: 
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
      case userTypes.CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      case userTypes.CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      case userTypes.ADD_POST_TO_ME:
        draft.me.Posts.unshift({ id: action.data });
        break;
      case userTypes.REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter((v:any) => v.id !== action.data);
        break;
      default:
        draft;
        break;
    }
  });
}

export default userReducer;