import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import google from '../../../images/login/google.png'
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorLog;

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorLog = <p className='text-danger'>Error: {error?.message}</p>
    }

    return (
        <div >
            {errorLog}
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-outline-dark w-100 d-block mx-auto my-2'>
                    <img src={google} alt="" />
                    <span className='px-2'>Sign In With Google </span>
                </button>
            </div>
        </div >
    );
};

export default SocialLogin;