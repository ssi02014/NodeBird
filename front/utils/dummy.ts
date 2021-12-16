import { Data } from "redux/types/userTypes"

export const dummyUser = (data: Data): Data => {
  return {
    ...data,
    nickname: 'minjae',
    password: '123',
    id: 1,
    Posts:[],
    Followings: [
      { nickname: '부기초' },
      { nickname: '전민재' },
      { nickname: '정연재' }
    ],
    Followers: [
      { nickname: '부기초' },
      { nickname: '전민재' },
      { nickname: '정연재' }
    ]
  }
}