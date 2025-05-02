import "../styles/Score.css";

const Score = ({ score, target }) => {
  return (
    <div role="scores" className="score">
      <div className="score-player">Score: {score}</div>
      <div className="score-target">Target: {target}</div>
    </div>
  );
};

export default Score;
