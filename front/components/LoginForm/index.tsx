import React, { useCallback, useState } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    id: "",
    password: "",
  });

  //props로 넘기는 함수는 useCallback 사용이 효율적임
  const onChange = useCallback((e) => {
    e.preventDefault();

    const { name, value } = e.target;
    
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }, [formValues]);

  return (
    <Form>
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
      <div>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </div>
    </Form>
  );
};

export default LoginForm;