import CartCard from "./CartCard";

const Cart = (props) => {
  return (
    <div className="cart-container">
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
        <h3>Subtotal: $</h3>
      </div>
      <div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
}
 
export default Cart;