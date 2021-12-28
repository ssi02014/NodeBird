import React, { useCallback, useEffect } from "react";
import { Avatar, Button, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "redux/reducers/userReducer";
import { RootState } from "redux/reducers";
import Router from "next/router";

const Profile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state: RootState) => state.user);
  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);
  if (!me) return null;

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
          {me?.Posts.length}
        </div>,
        <div key="followings">
          팔로잉
          <br />
          {me?.Followings.length}
        </div>,
        <div key="followers">
          팔로워
          <br />
          {me?.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        title={me?.nickname}
        avatar={<Avatar>{me?.nickname && me?.nickname[0]}</Avatar>}
      />
      <Button onClick={onLogout} loading={logOutLoading}>
        로그아웃
      </Button>
    </Card>
  );
};

export default Profile;
