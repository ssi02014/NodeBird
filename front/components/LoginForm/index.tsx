import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import useInput from 'hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonWrapper, FormWrapper } from './style';
import { Button, Input } from 'antd';
import { loginRequestAction } from 'redux/reducers/userReducer';
import { RootState } from 'redux/reducers';

const LoginForm = () => {
  const { formValues, onChange } = useInput({
    id: "",
    password: "",
  });
  const { isLoggingIn } = useSelector((state:RootState) => state.user);
  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    const { id, password } = formValues;

    if (id && password) {
      const data = { 
        id: Number(id), 
        password 
      };
      dispatch(loginRequestAction(data));
    }
  }, [formValues]);

  return (
    <FormWrapper onFinish={onSubmit}>
      <div>
        <label htmlFor="id">아이디</label>
        <br />
        <Input
          type="text" 
          name="id"
          value={formValues.id}
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
          value={formValues.password}
          onChange={onChange}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;