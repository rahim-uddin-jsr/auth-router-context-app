import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/User-context/UserContext';


const Home = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            {user?.displayName ? <h2>Welcome {user?.displayName}</h2>
                : <h2>Please Login First</h2>}
        </div>
    );
};

export default Home;