<<<<<<< HEAD
import React,{useState} from "react"
import { Link, useHistory } from "react-router-dom"
import "./Login.css";
import { auth } from "./firebase";
import userEvent from "@testing-library/user-event";

function Login() {
=======
import React,{useState} from "react";
import { Link, useHistory} from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {

>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        auth
<<<<<<< HEAD
            .signInWithEmailAndPassword(email, password)
            .then(auth =>{
                history.push('./')
            })
            .catch(error => alert(error.message))
=======
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01
    }

    const register = e=>{
        e.preventDefault();

        auth
<<<<<<< HEAD
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                <a href="./">
                if(auth){
                    history.push('./')
                }
                </a>
            })
            .catch(error => alert(error.message))
=======
        .createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
            if (auth){
                history.pushState('/')
            }
        })
        .catch(error => alert(error.message))

       
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01
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