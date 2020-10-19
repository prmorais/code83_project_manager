import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Background, Container, Content, Form } from './styles';

const SigninDev: React.FC = () => {
  return (
    <Container>
      <Content>
        <Form>
          <h1>Login como Dev</h1>
          <Input icon={FaEnvelope} placeholder="E-mail" type="email" />
          <Input icon={FaLock} placeholder="Senha" isPassword type="password" />
          <Button>Entrar</Button>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default SigninDev;
