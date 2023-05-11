import { useState, useEffect } from 'react';
import CartCard from "./CartCard";

const Cart = (props) => {
  // -------- CART STATE MANAGEMENT --------
  const [updatedCart, setUpdatedCart] = useState([]);

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

  // -------- USEEFFECT --------
  useEffect(() => {
    // map over props.cart
    setUpdatedCart(props.cart.map(item => {
      return {...item, quantity: 1}
    }));
  }, []);

  // console.log(updatedCart);

  return (
    <div className={props.displayCart ? "cart-container" : "collapse-cart-container"}>
      <div>
        <h1>Your Shopping Bag</h1>
      </div>
      {updatedCart.map(item => {
        
        return (
          <CartCard className="cart-card"
            title={item.title} 
            image={item.image}
            price={item.price}
            quantity={item.quantity}
            id={item.id}
            updatedCart={updatedCart}
            setUpdatedCart={setUpdatedCart}
            // handleQuantityIncrease={handleQuantityIncrease}
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