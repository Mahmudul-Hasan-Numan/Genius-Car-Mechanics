import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { setUser, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/home'

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
                setUser(result.user)

            })
    }

    return (
        <div className='mt-5 pt-5'>
            <h1>Please Login</h1>
            <button onClick={handleGoogleSignIn} className="btn btn-success">Google Sign In</button>
        </div>
    );
};

export default Login;