import AppLayout from 'components/AppLayout';
import FollowList from 'components/FollowList';
import NicknameEditForm from 'components/NicknameEditForm';
import Head from 'next/head';
import React from 'react';

const Profile = () => {
  const followingList = [
    { nickname: "전민재"},
    { nickname: "제로초"},
    { nickname: "노드버드"}
  ];
  
  const followerList = [
    { nickname: "전민재"},
    { nickname: "제로초"},
    { nickname: "노드버드"}
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;