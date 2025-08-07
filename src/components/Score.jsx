import { useMainData } from '../context/MainContext';
import '../styles/Score.css';

const Score = () => {
  const { data } = useMainData();

  return (
    <div role='scores' className='score'>
      <div className='score-player'>Score: {data.score}</div>
      <div className='score-target'>Target: {data.target}</div>
    </div>
  );
};

export default Score;
