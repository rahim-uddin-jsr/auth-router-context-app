import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'Rahim Uddin' })
    const userInfo = { auth, user, setUser }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;