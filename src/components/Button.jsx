import "../styles/Button.css";

const Button = ({ name, onClick }) => (
  <button className="btn" onClick={onClick}>
    {name}
  </button>
);

export default Button;
