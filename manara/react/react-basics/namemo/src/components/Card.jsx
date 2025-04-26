import "../styles/Card.css";

const Card = ({ img, name, onSelect }) => {
  return (
    <div className="card" onClick={onSelect}>
      <div className="card-image">
        <img src={`/src/assets/characters/${img}`} alt={name} />
      </div>
      <div className="card-name">
        <h3 className="name">{name}</h3>
      </div>
    </div>
  );
};

export default Card;
