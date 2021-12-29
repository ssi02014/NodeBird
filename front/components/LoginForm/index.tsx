import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import useInput from 'hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonWrapper, FormWrapper } from './style';
import { Button, Input } from 'antd';
import { loginRequestAction } from 'redux/reducers/userReducer';
import { RootState } from 'redux/reducers';

const LoginForm = () => {
  const [ formValues, onChange, onReset ] = useInput({
    email: "",
    password: "",
  });
  const { logInLoading } = useSelector((state:RootState) => state.user);
  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    const { email, password } = formValues;

    if (email && password) {
      const data = { 
        email: Number(email), 
        password 
      };
      dispatch(loginRequestAction(data));
      onReset();
    }
  }, [formValues]);
  
  return (
    <FormWrapper onFinish={onSubmit}>
      <div>
        <label htmlFor="email">이메일</label>
        <br />
        <Input
          type="email" 
          name="email"
          id="email"
          value={formValues.email}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <br />
        <Input
          type="password" 
          name="password"
          id="password"
          value={formValues.password}
          onChange={onChange}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;