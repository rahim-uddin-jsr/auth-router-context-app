import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/User-context/UserContext';


const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user.displayName);
    return (
        <div>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;