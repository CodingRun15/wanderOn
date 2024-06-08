import { useEffect, useRef } from 'react';
import '../App.css';
import { useNavigate } from 'react-router';
import { useAuth } from "../Contexts/authContext";

const SignIn = ()=>{
const {signIn} = useAuth();
    const email = useRef();
    const navigate  = useNavigate();
    const password = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const user = {
            email: email.current.value,
            password:  password.current.value,
        }
      fetch('https://wanderon-2ihc.onrender.com/auth/signin',{
        method:'POST',
        credentials:'include',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
      }).then((response)=>{
        if(response.status === 200){
            signIn();
            navigate ('/dashboard');
            return response.json();
        }
        else{
            alert('Invalid credentials');
        }
      }).then((data)=>{
        sessionStorage.setItem('token',data.token);
        console.log(data);
      })
      .catch((error)=>{
       alert('Error: ' + error);
      })
    }
    useEffect(()=>{
        const token = sessionStorage.getItem('token');
        if(token){
             signIn();
             navigate ('/dashboard');
             return;
        }
        email.current.focus();
    },[]);
    return(
        <>
        <div className='signup-form'>
        <h1>Sign In</h1>
        <input type='email'  ref={email} placeholder='email'  />
        <input type='password'  ref={password} placeholder='password' />
        <button className="animate_animated animate_pulse" type='submit' onClick={handleSubmit}>Submit</button>
        <h1>Need an account?</h1>
        <button className="animate_animated animate_pulse" type='submit' onClick={()=>{navigate('/')}}>Sign Up</button>
        </div>
        </>
    )
}

export default SignIn;