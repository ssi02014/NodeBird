import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { Avatar, Button, Card } from 'antd';

interface Props {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Profile = ({ setIsLoggedIn }: Props) => {
  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
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
        title="Minjae"
        avatar={<Avatar>JMJ</Avatar>}
      />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

export default Profile;