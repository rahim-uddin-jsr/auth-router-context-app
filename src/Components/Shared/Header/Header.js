import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/User-context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    return (
        <div>

            <div className="navbar bg-primary text-primary-content ">
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Auth FireBase</Link>

                <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
                <Link className='ml-5 btn btn-ghost normal-case text-xl' to='/about'>About</Link>
                <div className="ml-auto">
                    <h2>{user?.displayName}</h2>
                    {
                        !user?.displayName ? <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link> :
                            <button className="btn btn-ghost normal-case text-xl" onClick={() => { logOut() }} >Logout</button>
                    }
                    <Link className='ml-5 btn btn-ghost normal-case text-xl' to='/register'>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;