const CartCard = (props) => {
  // -------- FUNCTIONS --------
  // increase quantity function
  const handleQuantityIncrease = (id) => {
    props.updatedCart.map(item => {
      if (item.id === id) {
        item.quantity += 1;
      }
    })
  }

  return (
    <div className="cart-card-container">
      <h3 className="cart-card-title">{props.title}</h3>
      <img className="cart-card-product-image" src={props.image} alt="item" />
      <p className="cart-card-description">{props.description}</p>
      <h4 className="cart-card-price">${props.price}</h4>
      <div className="cart-quantity-container">
        <button className="cart-quantity-btn">-</button>
        <p>Quantity: {props.quantity}</p>
        <button
          className="cart-quantity-btn"
          onClick={() => {
            handleQuantityIncrease(props.id)
            console.log(props.quantity)
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
 
export default CartCard;