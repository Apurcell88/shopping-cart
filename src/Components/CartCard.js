const CartCard = (props) => {
  // -------- FUNCTIONS --------
  // increase quantity function
  const handleQuantityIncrease = (id) => { 
    const newState = props.updatedCart.map(item => {
      if (item.id === id) {
        return {...item, quantity: item.quantity + 1}
      }
      else {
        return item;
      }
    });

    props.setUpdatedCart(newState);
  }

  // decrease quantity function
  const handleQuantityDecrease = (id) => { 
    const newState = props.updatedCart.map(item => {
      if (item.id === id && item.quantity > 0) {
        return {...item, quantity: item.quantity - 1}
      }
      else {
        return item;
      }
    });

    props.setUpdatedCart(newState);
  }

  // remove from cart function
  const handleCartRemoval = (id) => {
    // check if id does not equal an id in the updatedCart array? This is throwing an error currently
    props.setUpdatedCart((prev) => {
      console.log(prev);
      // prev.filter((item) => {
      //   return item.id !== id;
      // })
    })
    // console.log(props.updatedCart);

    // const newState = props.updatedCart.filter(item => {
    //   return item.id !== id;
    // });

    // props.setUpdatedCart(newState);
  }

  return (
    <div className="cart-card-container">
      <div className="cart-card-info-container">
        <h3 className="cart-card-title">{props.title}</h3>
        <img className="cart-card-product-image" src={props.image} alt="item" />
        <p className="cart-card-description">{props.description}</p>
        <h4 className="cart-card-price">${props.price}</h4>
      </div>
      <div className="cart-quantity-container">
        <button
          className="cart-quantity-btn"
          onClick={() => {
            handleQuantityDecrease(props.id);
          }}
        >
            -
        </button>
        <p>Quantity: {props.quantity}</p>
        <button
          className="cart-quantity-btn"
          onClick={() => {
            handleQuantityIncrease(props.id);
          }}
        >
          +
        </button>
      </div>
      <div>
        <button
          className="cart-removal-btn"
          onClick={() => {
            handleCartRemoval(props.id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
 
export default CartCard;