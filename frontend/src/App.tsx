import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import Routes from './Routes';
import GlobalStyled from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactNotification />
      <Routes />
      <GlobalStyled />
    </BrowserRouter>
  );
};

export default App;
