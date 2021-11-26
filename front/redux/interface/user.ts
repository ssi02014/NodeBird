export interface Data {
  id: number;
  password: string;
};

export interface UserState {
  isLoggedIn: boolean,
  me: Data | null,
  signUpData : Object,
  loginData: Object,
};