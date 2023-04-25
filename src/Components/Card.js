const Card = (props) => {
  return (
    <div>
      <h3 className="title">{props.title}</h3>
      <img src={props.image} alt="item" />
      <p>{props.description}</p>
      <h4>{props.price}</h4>
    </div>
  );
}
 
export default Card;