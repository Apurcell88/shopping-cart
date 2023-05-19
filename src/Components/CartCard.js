const CartCard = (props) => {
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
            props.handleQuantityDecrease(props.id);
          }}
        >
            -
        </button>
        <p>Quantity: {props.quantity}</p>
        <button
          className="cart-quantity-btn"
          onClick={() => {
            props.handleQuantityIncrease(props.id);
          }}
        >
          +
        </button>
      </div>
      <div className="cart-removal-container">
        <button
          className="cart-removal-btn"
          onClick={() => {
            props.handleCartRemoval(props.id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
 
export default CartCard;