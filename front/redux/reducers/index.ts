import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, CombinedState, combineReducers } from "redux";

import user from './userReducer';
import post from './postReducer';
import { UserState } from "redux/types/userTypes";
import { PostState } from "redux/types/postTypes";

// interface Hydrate {
//   type: typeof HYDRATE,
//   payload: {
//     user: UserState,
//     post: PostState,
//   },
// }

const rootReducer = (state:any = {}, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user,
        post,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;