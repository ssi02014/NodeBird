import AppLayout from 'components/AppLayout';
import FollowList from 'components/FollowList';
import NicknameEditForm from 'components/NicknameEditForm';
import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

const Profile = () => {
  const { me } = useSelector((state:RootState) => state.user);
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={me?.Followings} />
        <FollowList header="팔로워" data={me?.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;