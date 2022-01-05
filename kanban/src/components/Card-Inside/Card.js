import "./Card.css";

const CardInside = (props) => {
  const { children, person, genre, status } = props;
  return (
    <div className="cardInside">
      <p className="task">{children}</p>
      <div className="underTask">
        <img className="person" src={person} alt=""></img>
        <p className={`genre__${status}`}>{`${genre}`}</p>
      </div>
    </div>
  );
};

export default CardInside;
