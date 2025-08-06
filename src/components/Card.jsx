import "../styles/Card.css";

const Card = ({ img, name, flip, onSelect }) => {
  return (
    <div data-testid="card" className="flip-card" onClick={onSelect}>
      <div
        data-testid="innerCard"
        className={`flip-card-inner ${flip ? "flip" : ""}`}
      >
        <div className="flip-card-front">
          <div className="card-image">
            <img src={`/src/assets/characters/${img}`} alt={name} />
          </div>
          <div className="card-name">
            <h3 className="name">{name}</h3>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="card-image">
            <img src="/src/assets/sharingan.jpg" alt="card back" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
