import { createContext, useState } from "react";

// Exporting 
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [showLogin , setShowLogin] = useState(true)
    // Pass data from here !!
    const data = {
        showLogin,
        setShowLogin
    }
    // Main part
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;