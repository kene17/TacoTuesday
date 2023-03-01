import React, { createContext, ReactNode, useState } from 'react';

interface UserContextProviderProps {
    children: ReactNode
}

export type UserContextType = {
    userInfo: {
        username: string,
        id: string,
        iat: number,
    } | null,
    setUserInfo: (userInfo: {
        username: string,
        id: string,
        iat: number,
    } | null) => void;
}

export const UserContext = createContext<UserContextType>({
    userInfo: {
        username: '',
        id: '',
        iat: 0,
    },
    setUserInfo: () => { throw new Error("setUserInfo function not implemented"); },
});

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [userInfo, setUserInfo] = useState<{
        username: string,
        id: string,
        iat: number,
      } | null>({
        username: '',
        id: '',
        iat: 0,
      });
    return <UserContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserContext.Provider>;
};
