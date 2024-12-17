import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate, NavigateFunction, useLocation } from 'react-router-dom';
import { User } from '../utils/types';
import { logout } from '@/utils/supabase/apiFunctions';

interface UserContextProps {
    user: User | null;
    setUserState: (user: User) => void;
    isLoggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    navigateTo: NavigateFunction;
    logoutUser: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const location = useLocation();
    const navigateTo = useNavigate()
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user))
        }
    }, [location.pathname])

    const setUserState = (user: User) => {
        localStorage.setItem('user', JSON.stringify(user))
    };

    const logoutUser = () => {
        logout();
        setUser(null);
        localStorage.clear()
        navigateTo('/')
        setLoggedIn(false)
    };

    return (
        <UserContext.Provider value={{ user, setUserState, navigateTo, logoutUser, isLoggedIn, setLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};


export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};