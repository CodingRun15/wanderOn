import { useEffect, useRef } from "react";
import '../App.css';
import 'animate.css';
import { useNavigate } from "react-router";
const SignUp = ()=>{
  const navigate = useNavigate();
const username = useRef();
const password = useRef();
const email = useRef();
const handleSubmit = (e)=>{
  e.preventDefault();
  const user = {
    username: username.current.value,
    email: email.current.value,
    password:  password.current.value,
  }

  fetch('http://localhost:4000/auth/signup  ',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(user)
  }).then((response)=>response.json()).then((data=>{
    console.log(data);
  })).catch((error)=>{
    console.log(error);
  })

  navigate('/signin');
   
}
useEffect(()=>{
  username.current.focus();
},[]);
  return (
    <>
      <div className='signup-form'>
     <h1>Sign Up</h1>
     <input type='text'  ref={username} placeholder='username'  />
     <input type='email'  ref={email} placeholder='email'  />
     <input type='password'  ref={password} placeholder='password' />
     <button className="animate_animated animate_pulse" type='submit' onClick={handleSubmit}>Submit</button>
     <h1>Already have an account?</h1>
     <button className="animate_animated animate_pulse" type='submit' onClick={()=>navigate('/signin')}>Sign In</button>
     </div>
     </>
  )}
  export default SignUp;
