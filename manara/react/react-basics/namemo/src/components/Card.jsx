import "../styles/Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src="/src/assets/characters/hinata.jpg" alt="cardImage" />
      </div>
      <div className="card-name">
        <h3 className="name">Hinata Hyuga</h3>
      </div>
    </div>
  );
};

export default Card;
