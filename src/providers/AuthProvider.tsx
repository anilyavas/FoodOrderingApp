import { PropsWithChildren, createContext } from 'react';

type AuthData = {};

const AuthContext = createContext<AuthData>({});

export default function AuthProvider({ children }: PropsWithChildren) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
