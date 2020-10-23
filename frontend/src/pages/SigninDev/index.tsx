import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { store } from 'react-notifications-component';
import { AuthContext } from '../../context/auth';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Background, Container, Content, Form, FormActions } from './styles';
import ICredentialDev from '../../interfaces/ICredentialDev';

const SignInDev: React.FC = () => {
  const { user, signInDev } = useContext(AuthContext);

  const [model, setModel] = useState<ICredentialDev>({
    email: '',
    password: '',
  });

  const updateModel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setModel({
        ...model,
        [e.target.name]: e.target.value,
      });
    },
    [model]
  );

  const onSubmit = useCallback(
    async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        await signInDev(model);
        store.addNotification({
          title: 'Sucesso!',
          message: `Usuário autenticado com sucesso!`,
          type: 'success',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 2000,
          },
        });
      } catch (error) {
        store.addNotification({
          title: 'Erro!',
          message: `${error}`,
          type: 'danger',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 2000,
          },
        });
      }
    },
    [model, signInDev]
  );

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Container>
      <Content>
        <Form onSubmit={onSubmit}>
          <h1>Login como Dev</h1>
          <Input
            icon={FaEnvelope}
            placeholder="E-mail"
            type="email"
            name="email"
            value={model.email}
            onChange={updateModel}
          />
          <Input
            icon={FaLock}
            placeholder="Senha"
            isPassword
            type="password"
            name="password"
            value={model.password}
            onChange={updateModel}
          />
          <Button type="submit">Entrar</Button>
          <FormActions>
            <Link to="/sign-up/dev">Faça seu cadastro</Link>
            <Link to="/">Voltar</Link>
          </FormActions>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default SignInDev;
