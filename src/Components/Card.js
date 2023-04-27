const Card = (props) => {
  return (
    <div className="card-container">
      <h3 className="card-title">{props.title}</h3>
      <img className="card-product-image" src={props.image} alt="item" />
      <p className="card-description">{props.description}</p>
      <h4 className="card-price">${props.price}</h4>
    </div>
  );
}
 
export default Card;