/* 
  as const를 붙여줌으로써 나중에 액션 객체를 만들게 action.type의 값을 추론하는 과정에서
  action.type이 string으로 추론되지 않고 'CHANGE_NICKNAME'와 같이 실제 문자열 값으로 추론 되도록 해준다.
*/

// User
export const CHANGE_NICKNAME = 'CHANGE_NICKNAME' as const;
export const LOG_IN = "LOG_IN" as const;
export const LOG_OUT = "LOG_OUT" as const;

// Post
export const ADD_POST = 'ADD_POST' as const;