import { Data } from "redux/types/userTypes"

export const dummyUser = (data: any): Data => {
  return {
    ...data,
    nickname: 'minjae',
    password: '123',
    id: 1,
    Posts:[
      "123",
      "456",
    ],
    Followings: [
      "123",
      "456",
    ],
    Followers: [
      "123",
      "456",
    ]
  }
}