import { useState, useEffect } from 'react';
import CartCard from "./CartCard";

const Cart = (props) => {
  // -------- CART STATE MANAGEMENT --------
  const [updatedJewelry, setUpdatedJewelry] = useState([]);

  // -------- CART FUNCTIONS --------
  // calculate subtotal function
  const calcTotal = () => {
    let total = 0;
    // take items in cart and add their prices together
    props.cart.map(item => {
       return total += item.price;
    });
    return total.toFixed(2);
  };

  // add quantity property function
  const addQualityProperty = (arr, updateState) => {
    updateState(arr.map(item => {
      return {...item, quantity: 0}
     }));
  }

  // -------- USEEFFECT --------
  useEffect(() => {
    addQualityProperty(props.jewelry, setUpdatedJewelry);

    console.log(updatedJewelry)
  }, [updatedJewelry]);

  // setUpdatedJewelry(props.jewelry.map(item => {
  //   return {...item, quantity: 0}
  //  }));
  //  console.log(updatedJewelry);

  return (
    <div className={props.displayCart ? "cart-container" : "collapse-cart-container"}>
      <div>
        <h1>Your Shopping Bag</h1>
      </div>
      {props.cart.map(item => {
        return (
          <CartCard className="cart-card"
            title={item.title} 
            image={item.image}
            price={item.price}
          />
        )
      })}
      <div>
        <h3>Subtotal: ${calcTotal()}</h3>
      </div>
      <div>
        <button className="checkout-btn">CHECKOUT</button>
      </div>
    </div>
  );
}
 
export default Cart;