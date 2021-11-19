import AppLayout from 'components/AppLayout';
import Head from 'next/head';
import React from 'react';

const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        내프로필
      </AppLayout>
    </>
  );
};

export default Profile;