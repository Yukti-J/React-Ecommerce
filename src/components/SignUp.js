import React, { useState } from 'react'
import '../css/signup.css'
import {auth,db} from '../config/config.js'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp(props) {

    const navigate = useNavigate();

    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const [success,setSuccess] = useState("")
 
    const singup = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((cred)=>{
            db.collection('users').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(()=>{
                setSuccess("Account successfully created");
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                navigate('/');
            }).catch(err=>setError(err.message));
        }).catch(err=>setError(err.message));
    }
  return (
   <>
   <form className='form' onSubmit={singup}>
   <div className='title'><h3>SIGN UP</h3></div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address*</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e)=>{setEmail(e.target.value)}} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name*</label>
    <input type="text" className="form-control" id="name" onChange={(e)=>{setName(e.target.value)}} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label" required>Password*</label>
    <input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} id="password"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <p>Already have an account? <span><Link to="/login">Login</Link></span> </p>
</form>
    {error&&<span className='error-msg'><p>{error}</p></span>}
    {success&&<span className='success-msg'><p>{success}</p></span>}
   </>
  )
}
