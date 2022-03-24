import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async(e) => {
    e.preventDefault();
    // if(!)
    console.log(e);
    let status;

    try {
      const auth = getAuth();
      status = await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login Success');
      navigate('/');
    } catch (e) {
      console.log(e);
      toast.error('Login  failed')

    }

  }
  return (

    <div className='login-user container'>
      <div className='row'>
        <div className='col-md-8'>
          <div className='login-form'>
            <h2>login</h2>
            <hr />
            <input type='text' placeholder='email' className='form-control my-2' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='password' className='form-control my-2' value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={login} className='btn btn-primary my-3'>Login</button>

            <hr />
            <Link to='/register'>Click here to Register </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage