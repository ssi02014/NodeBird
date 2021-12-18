import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, CombinedState, combineReducers } from "redux";

import user from './userReducer';
import post from './postReducer';
import { UserState } from "redux/types/userTypes";
import { PostState } from "redux/types/postTypes";

interface Hydrate {
  type: typeof HYDRATE,
  payload: {
    user: UserState,
    post: PostState,
  },
}

const rootReducer = combineReducers({
  index: (state:any = {}, action: AnyAction): Hydrate => {
    console.log('HYDRATE', action);
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload}
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;