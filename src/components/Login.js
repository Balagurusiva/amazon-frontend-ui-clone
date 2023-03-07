import React from 'react'
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { auth } from './firebase'
import './style/login.css'
 
 

function Login() {
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,SetPassword] = useState('')

  const signin = e =>{

    console.log("clicked");
    auth  
        .signInWithEmailAndPassword(email,password)
        .then((auth)=>{
          console.log(auth)
          if (auth){
            navigate('/')
          }
        })
        .catch(error => alert(error.message))
  }

  const register = e =>{
 
    console.log("clicked");

    auth  
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
          console.log(auth)
          if (auth){
            navigate('/')
          }
        })
        .catch(error => alert(error.message))
     
  }
  
  return (
    <div className='login'>
        <Link to='/'>
           <img  
            className='login__img'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon logo.svg.png' />
        </Link>
        <div className='login__container'>
            <h1>Login</h1>
            <form>
                <h5>E-mail</h5>
                <input 
                  type='email'
                  value ={email}
                  onChange= {e=>setEmail(e.target.value)}
                  />
                <h5>Password</h5>
                <input 
                  type='password'
                  value ={password}
                  onChange= {e=>SetPassword(e.target.value)} />
                 
            </form>
            <button 
                  onClick={signin}
                  className='login__signin__btn' >Sign in</button>

            <p>
                By signing in yor agree to the amazon clone app condition of use & and sale .Please
                see our privacy nots and cookies based on ads
            </p>

            <button 
              onClick={register}
              className='login__register__btn'>Create your ccount</button>

        </div>

    </div>
  )
}

export default Login
