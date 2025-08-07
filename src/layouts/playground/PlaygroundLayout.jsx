import Settings from './Settings';
import MainContextProvider from '../../context/MainContext';
import Cards from './Cards';
import GameStatus from './GameStatus';

const PlaygroundLayout = ({ onQuit }) => {
  return (
    <MainContextProvider>
      <Settings onQuit={onQuit} />
      <Cards />
      <GameStatus onQuit={onQuit} />
    </MainContextProvider>
  );
};

export default PlaygroundLayout;
