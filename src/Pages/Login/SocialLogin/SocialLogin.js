import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import google from '../../../images/login/google.png'

const SocialLogin = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    return (
        <div >
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