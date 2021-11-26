import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import useInput from 'hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginAction } from 'redux/reducers/userReducer';
import { ButtonWrapper, FormWrapper } from './style';
import { Button, Input } from 'antd';

const LoginForm = () => {
  const { formValues, onChange } = useInput({
    id: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    const { id, password } = formValues;

    if (id && password) {
      const data = { 
        id: Number(id), 
        password 
      };
      dispatch(loginAction(data));
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
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;