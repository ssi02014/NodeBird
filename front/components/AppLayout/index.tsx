import React, { useState } from 'react';
import Link from 'next/link';
import LoginForm from 'components/LoginForm';
import Profile from 'components/Profile';
import { StyledSearchInput } from './style';
import { Menu, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';


interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item key="search">
         <StyledSearchInput enterButton />
        </Menu.Item>
        <Menu.Item key="register">
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <Profile /> : <LoginForm /> }
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://blog.naver.com/ssi02014" target="_blank" rel="noreferrer noopener">Made by ZeroCho</a>
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;