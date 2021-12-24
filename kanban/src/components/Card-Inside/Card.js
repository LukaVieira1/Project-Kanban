import "./Card.css";

const CardInside = (props) => {
  const { children } = props;
  return (
    <div class="cardInside">
      <p>{children}</p>
      <div></div>
    </div>
  );
};

export default CardInside;
