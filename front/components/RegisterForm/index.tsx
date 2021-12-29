import React, { useCallback, useMemo, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { ErrorMessage, ButtonWrapper } from './style';
import useInput from 'hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { userTypes } from 'redux/Actiontypes/userActionTypes';
import { RootState } from 'redux/reducers';

const RegisterForm= () => {
  const [formValues, onChange] = useInput({
    email: "",
    nickname: "",
    password: "",
  });
  const [passwordCheck, setPasswordCheck] = useState(""); 
  const [term, setTerm] = useState(false);
  const [passwordCheckError, SetPasswordCheckError] = useState(false);
  const [termError, setTermError] = useState(false);

  const dispatch = useDispatch();
  const { signUpLoading } = useSelector((state: RootState) => state.user);

  const onChangePasswordCheck = useCallback((e) => {
    const { value } = e.target;
    const { password } = formValues;

    setPasswordCheck(value);
    SetPasswordCheckError(value !== password);
  }, [formValues]);

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
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
    const { email, nickname, password } = formValues;

    if (validation()) {
      dispatch({
        type: userTypes.SIGN_UP_REQUEST,
        data: { email, nickname, password }
      });
    }
  }, [formValues, validation]);

  return (
    <Form onFinish={onSubmit}>
      <div>
        <label htmlFor="register-email">이메일</label>
        <br />
        <Input
          type="email" 
          name="email"
          id="register-email"
          value={formValues.email}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label htmlFor="register-nickname">닉네임</label>
        <br />
        <Input
          type="text" 
          name="nickname"
          id="register-nickname"
          value={formValues.nickname}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label htmlFor="register-password">패스워드</label>
        <br />
        <Input
          type="password" 
          name="password"
          id="register-password"
          value={formValues.password}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label htmlFor="register-passwordCheck">패스워드 확인</label>
        <br />
        <Input
          type="password" 
          name="passwordCheck"
          id="register-passwordCheck"
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
        <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
      </ButtonWrapper>
    </Form>
  );
};

export default RegisterForm;