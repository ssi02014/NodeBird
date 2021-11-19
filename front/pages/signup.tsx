import AppLayout from 'components/AppLayout';
import React from 'react';
import Head from 'next/head';

const SignUp = () => {
  return (
    <>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <AppLayout>
        회원가입 페이지
      </AppLayout>
    </>
  );
};

export default SignUp;