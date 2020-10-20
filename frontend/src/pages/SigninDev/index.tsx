import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Background, Container, Content, Form, FormActions } from './styles';

const SignInDev: React.FC = () => {
  return (
    <Container>
      <Content>
        <Form>
          <h1>Login como Dev</h1>
          <Input icon={FaEnvelope} placeholder="E-mail" type="email" />
          <Input icon={FaLock} placeholder="Senha" isPassword type="password" />
          <Button>Entrar</Button>
          <FormActions>
            <Link to="/sign-up">Faça seu cadastro</Link>
            <Link to="/">Voltar</Link>
          </FormActions>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default SignInDev;
