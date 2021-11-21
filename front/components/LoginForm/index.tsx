import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import Link from 'next/link';
import { ButtonWrapper, FormWrapper } from './style';
import { Button, Form, Input } from 'antd';

interface Props {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const LoginForm = ({ setIsLoggedIn } : Props) => {
  const [formValues, setFormValues] = useState({
    id: "",
    password: "",
  });

  //props로 넘기는 함수는 useCallback 사용이 효율적임
  const onChange = useCallback((e) => {
    // Ant-Design에서는 e.preventDefault 안해도 됨 이미 적용되어 있음
    const { name, value } = e.target;
    
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }, [formValues]);

  const onSubmit = useCallback(() => {
    const { id, password } = formValues;
    console.log(id, password);
    setIsLoggedIn(true);
  }, [formValues]);

  return (
    <FormWrapper onFinish={onSubmit}>
      <div>
        <label htmlFor="user-id">아이디</label>
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