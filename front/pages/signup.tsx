import AppLayout from 'components/AppLayout';
import React from 'react';
import Head from 'next/head';
import RegisterForm from 'components/RegisterForm';

const SignUp = () => {
  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <RegisterForm />
    </AppLayout>
  );
};

export default SignUp;