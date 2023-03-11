import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/User-context/UserContext';

const Login = () => {
    const { logInWithEmailPassword, setUser } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        logInWithEmailPassword(email, password)
            .then(userCredentials => {
                setUser(userCredentials.user);
                console.log(userCredentials.user.displayName);
            }).catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                console.log(err);
            });
        from.reset()

    }
    const handleRecoverPassword = e => { }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-4">Please Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <button onClick={handleRecoverPassword} href="#" className="btn-link label-text-alt link link-hover">Forgot password?</button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;