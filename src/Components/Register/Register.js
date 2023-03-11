import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/User-context/UserContext';


const Register = () => {
    const { createUser, updateUserInfo } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        const userName = from.name.value;


        createUser(email, password, userName).then(userCredential => {
            // updateProfile(auth.currentUser, { displayName: userName })

            updateUserInfo({ displayName: userName })
                .then(() => {
                    alert('registration successful');
                    navigate('/login')
                }).catch(err => {
                    console.log(err);
                })
        }).catch(err => {
            console.log(err);
        })
        from.reset()
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-4">Please Register now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Full name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <Link to='/login' className="btn-link label-text-alt link link-hover">Already Have an account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;