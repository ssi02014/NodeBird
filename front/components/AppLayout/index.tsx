import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import LoginForm from 'components/LoginForm';
import Profile from 'components/Profile';

interface Props {
  children: React.ReactNode;
}
const AppLayout = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
         <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <Menu.Item>
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