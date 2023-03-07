const Card = (props) => {
  return (
    <div className="card">
      <img className="card-item-image" src={props.itemImage} alt="Food dish" />
      {props.item}
      <h3>${props.price}</h3>
    </div>
  );
}
 
export default Card;