import { createContext, useContext, useState } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// Provide authentication state and methods
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    const signIn = () => {
        setIsAuth(true);
    };

    const signOut = () => {
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = ()=>{
    return useContext(AuthContext);
}



