import React, { useEffect } from "react";
<<<<<<< HEAD
=======
import { Route } from "react-router-dom";
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
<<<<<<< HEAD
import { auth } from "./firebase";
import { useStateValue} from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Kz1CHSCWOwBCtDLDYdCrkx53bnDHtQCHYNG7GM0wRHenb2TSEELhLE5tNmaya6DjYYjWFpzvYHBmd0fcrCL6WgO00T7gqDUpg"
);
=======
import { useHistory} from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01

function App() {
  const [{}, dispatch] = useStateValue();

<<<<<<< HEAD
  useEffect(()=>{


    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
=======
  useEffect (() => {

    
    auth.onAuthStateChanged(authUser =>{
    console.log('THE USER IS >>>', authUser);
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01

      if(authUser){

        dispatch({
<<<<<<< HEAD
          type: 'SET_USER',
          user: authUser
        })

      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
        
      }
    })
  }, [])

=======
          type:'SET_USER',
          user:authUser
        })


      }else{
        dispatch({
          type : 'SET_USER',
          user:null
        })

      }
    })

  }, [])
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01

  return (
    // BEM
    <Router>

    <div className="App">
     <Switch>
     <Route path="/login">
       <Login />
    </Route> 

     <Route path="/checkout">
       <Header />
       
       <Checkout />
       </Route>

       <Route path="/payment">
         <Header/>
         <Elements stripe={promise}>
           <Payment/>
         </Elements>
       </Route>

       <Route path="/">
       <Header />
       <Home />
      </Route>
        

     </Switch>
    </div>
    </Router>
  );
}

export default App;
