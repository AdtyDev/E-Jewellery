import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history =  useHistory();
  const [{ basket },dispatch] = useStateValue();
=======

function Subtotal() {
  const [{ basket },dispatch] = useStateValue();

>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01
  return (
    <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
<<<<<<< HEAD
                Subtotal ({basket.length} items):<strong>{value}</strong>
=======
                Subtotal ({basket.length} items):
                <strong>{value}</strong>
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/>This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <a href="/payment"><button onClick={e => history.push('/payment')}>Proceed to Checkout
            </button>
            </a>
    </div>
  );
}

<<<<<<< HEAD
export default Subtotal;
=======
export default Subtotal;  
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01
