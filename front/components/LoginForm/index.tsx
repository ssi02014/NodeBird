import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import Link from 'next/link';
import { ButtonWrapper, FormWrapper } from './style';
import { Button, Form, Input } from 'antd';
import useInput from 'hooks/useInput';

interface Props {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const LoginForm = ({ setIsLoggedIn } : Props) => {
  const { formValues, onChange } = useInput({
    id: "",
    password: "",
  });

  const onSubmit = useCallback(() => {
    const { id, password } = formValues;
    console.log(id, password);
    setIsLoggedIn(true);
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