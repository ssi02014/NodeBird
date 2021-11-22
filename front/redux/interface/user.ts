import { HYDRATE } from "next-redux-wrapper";

export interface Data {
  id: string;
  password: string;
}

export interface UserState {
  user: {
    isLoggedIn: boolean,
    user: Data | null,
    signUpData : Object,
    loginData: Object,
  },
  post : {
    mainPosts: any[],
  }
}

export interface HydratePayload {
  type: typeof HYDRATE,
  payload: UserState,
}