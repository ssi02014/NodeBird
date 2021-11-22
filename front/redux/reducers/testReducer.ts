
// as const를 붙여줌으로써 나중에 액션 객체를 만들게 action.type의 값을 추론하는 과정에서
// action.type이 string으로 추론되지 않고 'CHANGE_NICKNAME'와 같이 실제 문자열 값으로 추론 되도록 해준다.
const CHANGE_NICKNAME = 'CHANGE_NICKNAME' as const;

const initialState = {
  name: 'minjae',
  age: 27,
  password: 'babo',
};

// 액션 생성 함수
export const changeNickname = () => ({
  type: CHANGE_NICKNAME,
  data: "boogicho",
});

// 모든 액션 객체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.

type TestAction = ReturnType<typeof changeNickname>

const testReducer = (state = initialState, action: TestAction) => {
  switch(action.type) {
    case 'CHANGE_NICKNAME': 
      return {
        ...state,
        name: action.data,
      }
  
    default:
      return state;
  }
}

export default testReducer;