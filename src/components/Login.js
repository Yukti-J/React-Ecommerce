import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/config';
// import logo from '../logoweb.svg'

export default function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(()=>{
            setEmail('');
            setPassword('');
            setError('');
            setSuccess('Logged In Successfully');
            navigate('/');
        }).catch(err=>setError(err.message));
    }

  return (
    <>
    <form className='form' onSubmit={login}>
    <div className='title'><h3>LOGIN</h3></div>
   <div className="mb-3">
     <label htmlFor="email" className="form-label">Email address*</label>
     <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}} required/>
   </div>
   <div className="mb-3">
     <label htmlFor="password" className="form-label" required>Password*</label>
     <input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} id="password"/>
   </div>
   <button type="submit" className="btn btn-success">Login</button>
   <p>New User? <span><Link to="/signup">Sign Up</Link></span> </p>
 </form>
     {error&&<span className='error-msg'><p>{error}</p></span>}
     {success&&<span className='success-msg'><p>{success}</p></span>}
    </>
  )
}
