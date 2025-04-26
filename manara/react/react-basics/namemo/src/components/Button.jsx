import "../styles/Button.css";

const Button = ({ onClick }) => (
  <button className="btn" onClick={onClick}>
    Play
  </button>
);

export default Button;
