import React from 'react'
import { AuthContext } from './AuthContext';

export default function AuthProvider({children}) {
    const [user, setUser] = React.useState(()=> {
        const savedUser = sessionStorage.getItem("session");
        if (savedUser) {
            return JSON.parse(savedUser);
        }
        return null;

    });

    const login =(name, password) => {
        if (name === "admin" && password === "1234") {
            const session =  { name }
            setUser(session);
            sessionStorage.setItem("session", JSON.stringify(session));
            return true;
        }
        return false;
    }

    const logout = () => {  
        sessionStorage.removeItem("session");
        setUser(null);
        alert("Has cerrado sesión");

    }


  return (

    <AuthContext.Provider value={{user, login, logout}}>
    {children}
    </AuthContext.Provider>


    
  )
}
