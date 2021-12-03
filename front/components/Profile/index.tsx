import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { Avatar, Button, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from 'redux/reducers/userReducer';
import { RootState } from 'redux/reducers';


const Profile = () => {
  const dispatch = useDispatch();
  const { me, isLoggingOut } = useSelector((state: RootState) => state.user);
  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">짹짹<br/>0</div>,
        <div key="followings">팔로잉<br/>0</div>,
        <div key="followers">팔로워<br/>0</div>
      ]}
    >
      <Card.Meta 
        title={me.nickname}
        avatar={<Avatar>{me.nickname && me.nickname[0]}</Avatar>}
      />
      <Button onClick={onLogout} loading={isLoggingOut}>로그아웃</Button>
    </Card>
  );
};

export default Profile;