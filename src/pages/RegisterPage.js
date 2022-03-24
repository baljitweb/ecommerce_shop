import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {toast} from 'react-toastify';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const register = async(e) => {
    e.preventDefault();
    // if(!)
    console.log(e);
    let status;

    try {
      const auth = getAuth();
      status = await createUserWithEmailAndPassword(auth, email, password);
      console.log('status: ', status);
      toast.success('Register Success')
    } catch (e) {
      console.log('status: ',status);
      console.log(e);
      toast.error('Register failed: user/email already registered')

    }
  }

  return (
    <div className='register-user container'>
      <div className='row'>
        <div className='col-md-8'>
          <form className='login-form'>
            <h2>Register</h2>
            <hr />
            <input type='email' placeholder='email' className='form-control my-2' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type='password' placeholder='password' className='form-control my-2' value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input type='password' placeholder='confirm password' className='form-control my-2' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

            <button onClick={register} className='btn btn-primary my-3'>Register</button>
            <hr />
            <Link to='/login'>Click here to Login </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
