import React, { createContext, useCallback, useState } from 'react';

import ICredentialDev from '../interfaces/ICredentialDev';
import api from '../services/api';

interface IUser {
  id: string;
  name: string;
  email: string;
  active: string;
  created_at: string;
  updated_at: string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

interface IAuthContextState {
  user: IUser;
  signInDev(credentials: ICredentialDev): Promise<void>;
}

export const AuthContext = createContext<IAuthContextState>(
  {} as IAuthContextState
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('ProjectManagerToken');
    const user = localStorage.getItem('ProjectManagerUser');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signInDev = useCallback(async (credentials: ICredentialDev) => {
    const response = await api.post('/sessions', credentials);

    const { token, user } = response.data;

    localStorage.setItem('ProjectManagerToken', token);
    localStorage.setItem('ProjectManagerUser', JSON.stringify(user));

    setData({
      token,
      user,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ signInDev, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
};
