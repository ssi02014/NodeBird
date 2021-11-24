export interface Data {
  id: string;
  password: string;
};

export interface UserState {
  isLoggedIn: boolean,
  user: Data | null,
  signUpData : Object,
  loginData: Object,
};