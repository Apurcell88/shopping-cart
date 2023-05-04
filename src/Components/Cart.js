import CartCard from "./CartCard";

const Cart = (props) => {
  // calculate subtotal function
  const calcTotal = () => {
    let total = 0;
    // take items in cart and add their prices together
    props.cart.map(item => {
       return total += item.price;
    });
    return total.toFixed(2);
  };

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