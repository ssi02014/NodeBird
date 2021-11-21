import React, { useCallback, useMemo, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { ErrorMessage, ButtonWrapper } from './style';
import useInput from 'hooks/useInput';

const RegisterForm= () => {
  const { formValues, onChange } = useInput({
    id: "",
    nickname: "",
    password: "",
  });
  const [passwordCheck, setPasswordCheck] = useState(""); 
  const [term, setTemr] = useState(false);
  const [passwordCheckError, SetPasswordCheckError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onChangePasswordCheck = useCallback((e) => {
    const { value } = e.target;
    const { password } = formValues;

    setPasswordCheck(value);
    SetPasswordCheckError(value !== password);
  }, [formValues]);

  const onChangeTerm = useCallback((e) => {
    setTemr(e.target.checked);
    setTermError(false);
  }, []);

  const validation = useCallback(() => {
    const { password } = formValues;

    if (password !== passwordCheck) {
      SetPasswordCheckError(true)
      return false;
    } 

    if (!term) {
      setTermError(true)
      return false;
    } 
    return true;
  }, [formValues, term, passwordCheck]);

  const onSubmit = useCallback(() => {
    const { id, nickname, password } = formValues;

    if (validation()) {
      console.log(id, nickname, password);
    }
  }, [formValues, validation]);

  return (
    <Form onFinish={onSubmit}>
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
        <label htmlFor="nickname">닉네임</label>
        <br />
        <Input
          type="text" 
          name="nickname"
          value={formValues.nickname}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">패스워드</label>
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
        <label htmlFor="passwordCheck">패스워드 확인</label>
        <br />
        <Input
          type="password" 
          name="passwordCheck"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          required
        />
        {passwordCheckError && (
          <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
        )}
      </div>
      <div>
        <Checkbox 
          name="term"
          checked={term}
          onChange={onChangeTerm}
        >
          약관동의를 동의합니다.
        </Checkbox>
        {termError && (
          <ErrorMessage>약관의 동의하셔야 합니다.</ErrorMessage>
        )}
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit">가입하기</Button>
      </ButtonWrapper>
    </Form>
  );
};

export default RegisterForm;