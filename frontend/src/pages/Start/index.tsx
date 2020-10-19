import React from 'react';
import { FaCode, FaUsers } from 'react-icons/fa';

import logo from '../../assets/logo.png';

import { Container, EntryCard, EntryCardItem } from './styles';

const Start: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <EntryCard>
        <EntryCardItem>
          <FaCode size={50} />
          <span>Entrar como Dev</span>
        </EntryCardItem>
        <EntryCardItem color="#fff" background="#111111">
          <FaUsers size={50} />
          <span>Entrar como Client</span>
        </EntryCardItem>
      </EntryCard>
    </Container>
  );
};

export default Start;
