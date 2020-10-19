import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import GlobalStyled from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyled />
    </BrowserRouter>
  );
};

export default App;
