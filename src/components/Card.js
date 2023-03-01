const Card = (props) => {
  return (
    <div className="card">
      <img className="card-dish-image" src={props.dishImage} alt="Food dish" />
      {props.dish}
    </div>
  );
}
 
export default Card;