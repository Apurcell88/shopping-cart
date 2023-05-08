const CartCard = (props) => {
  return (
    <div className="cart-card-container">
      <h3 className="cart-card-title">{props.title}</h3>
      <img className="cart-card-product-image" src={props.image} alt="item" />
      <p className="cart-card-description">{props.description}</p>
      <h4 className="cart-card-price">${props.price}</h4>
      <div className="cart-quantity-container">
        <button className="cart-quantity-btn">-</button>
        <p>Quantity: 0</p>
        <button className="cart-quantity-btn">+</button>
      </div>
    </div>
  );
}
 
export default CartCard;