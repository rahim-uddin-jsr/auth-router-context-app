import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <div className="navbar bg-primary text-primary-content ">
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Auth FireBase</Link>

                <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
                <Link className='ml-5 btn btn-ghost normal-case text-xl' to='/about'>About</Link>
                <div className="ml-auto ">
                    <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                    <Link className='ml-5 btn btn-ghost normal-case text-xl' to='/register'>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;