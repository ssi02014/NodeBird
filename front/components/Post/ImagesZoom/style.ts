import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";

// fixed를 화면 전체에 감싸는 방법
export const Overlay = styled.div`
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  height: 44px;
  position: relative;
  background-color: #fff;
  padding: 0;
  text-align: center;

  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
  & button { 
    position: absolute;
    top: 0;
    right: 0;
    text-align: 0;
    padding: 15px;
    line-height: 14px;
    cursor: pointer;
  }
`;

export const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background-color: #090909;
`;

export const ImageWrapper = styled.div`
  padding: 32px;
  text-align: center;
  & img {
    margin: 0 auto;
    min-height: 750px;
    max-height: 750px;
  }
`;

export const CloseButton = styled(CloseOutlined)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`;

export const Indicator = styled.div`
  text-align: center;

  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    display: inline-block;
    text-align: center;
    background-color: #313131;
    color: #fff;
    font-size: 15px;
  }
`;