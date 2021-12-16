import styled from "styled-components";
import { Form, Button } from 'antd';

export const FormWrapper = styled(Form)`
  position: relative;
  margin: 0;
`;

export const CustomButton = styled(Button)`
  position: absolute;
  right: 10px;
  bottom: -40px;
  z-index: 1;
`;