import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// type IBottonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Button;
