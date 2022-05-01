import React,{useState} from "react"
import { Link } from "react-router-dom"
import "./Login.css"

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
    }

    const register = e=>{
        e.preventDefault();
    }
    
  return (
    <div className="Login">
        <Link to='/'>
         <img
            className="login__logo"
            src="https://mpng.subpng.com/20180512/ive/kisspng-janet-mockler-jewellery-store-logo-5af78a8cbe0d79.1061652415261723007785.jpg"
            />
        </Link>
           <div
           className="login__container">
               <h1>Sign-In</h1>
               <form>
                   <h5>E-mail</h5>
                   <input type='text' value={email} 
                   onChange={ e=> setEmail(e.target.value)}
                   />

                   <h5>PassWord</h5>
                   <input type='password' value={password}
                   onChange={ e=> setPassword(e.target.value)}
                   />

                   <button type='submit' onClick={signIn}
                   className="login__signInButton">Sign In</button>
               </form>
            
            <p>
                By signing-in you agree to the e-jewellery
                Conditions of Use & Sale.
            </p>
            <button onClick={register}
            className="login_registerButton">Create Your Account </button>
           </div>
    </div>
  )
}

export default Login