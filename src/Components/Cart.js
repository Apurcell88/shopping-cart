import CartCard from "./CartCard";

const Cart = (props) => {
  // -------- CART FUNCTIONS --------
  // calculate subtotal function
  const calcTotal = () => {
    let total = 0;
  
    props.cart.map(item => {
       return total += item.price * item.quantity;
    });
    
    return total.toFixed(2);
  };

  // increase quantity function
  const handleQuantityIncrease = (id) => { 
    const newState = props.cart.map(item => {
      if (item.id === id) {
        return {...item, quantity: item.quantity + 1}
      }
      else {
        return item;
      }
    });

    props.setCart(newState);
  }

  // decrease quantity function
  const handleQuantityDecrease = (id) => { 
    const newState = props.cart.map(item => {
      if (item.id === id && item.quantity > 0) {
        return {...item, quantity: item.quantity - 1}
      }
      else {
        return item;
      }
    });

    props.setCart(newState);
  }

  // remove from cart function
  const handleCartRemoval = (id) => {
    const newState = props.cart.filter(item => {
      if (item.id !== id) {
        return {...item}
      }
    })

    props.setCart(newState);
  }

  return (
    <div className={props.displayCart ? "cart-container" : "collapse-cart-container"}>
      <div className='close-cart-container'>
        <button
          className='close-cart-btn'
          onClick={() => {
            props.setDisplayCart(false);
            props.setDisplayShop(true);
          }}
        >
          X
        </button>
      </div>
      <div className='cart-title-container'>
        <h1 className='cart-title'>Your Shopping Bag</h1>
      </div>
      <div className='cart-items-container'>
        {props.cart.map(item => {
        
          return (
            // <div className="cart-item">
              <CartCard
              title={item.title} 
              image={item.image}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
              handleQuantityIncrease={handleQuantityIncrease}
              handleQuantityDecrease={handleQuantityDecrease}
             handleCartRemoval={handleCartRemoval}
            />
            // </div>
          )
        })}
      </div>
      
      <div>
        <h3>Subtotal: ${calcTotal()}</h3>
      </div>
      <div>
        <button
          className="checkout-btn"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
 
export default Cart;