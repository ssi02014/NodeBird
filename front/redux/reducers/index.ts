import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from './userReducer';
import post from './postReducer';

interface Hydrate {
  type: typeof HYDRATE,
  payload: any,
}

const rootReducer = combineReducers({
  index: (state: Object = {}, action: Hydrate) => {
    switch(action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
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