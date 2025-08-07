import { createContext, useContext, useState } from 'react';
import characters from '../lib/data';
import shuffler from '../lib/utils/shuffler';

const INITIAL_STATE = {
  characters: characters,
  score: 0,
  target: characters.length,
  status: null,
};

const MainContext = createContext(INITIAL_STATE);

export const useMainData = () => useContext(MainContext);

const MainContextProvider = ({ children }) => {
  const [data, setData] = useState(INITIAL_STATE);
  const [selectedCards, setSelectedCards] = useState([]);

  const handleGameStatus = () => {
    if (data.score != data.characters.length)
      return setData(data => ({ ...data, status: 'lose' }));

    setData(data => ({ ...data, status: 'win' }));
  };

  const handleNewGame = () => {
    setData(INITIAL_STATE);
    setSelectedCards([]);
  };

  const openSettings = () => setData(data => ({ ...data, status: 'rinnegan' }));

  const incrementScore = () => {
    if (data.score == data.characters.length) return handleGameStatus();

    setData(data => ({ ...data, score: data.score + 1 }));
  };

  const shuffleCharacters = () =>
    setTimeout(
      () =>
        setData(data => ({ ...data, characters: shuffler(data.characters) })),
      1000
    );

  const addToCards = id => {
    try {
      if (!id) throw Error;

      if (selectedCards.includes(id)) return handleGameStatus();

      setSelectedCards([...selectedCards, id]);

      incrementScore();
      shuffleCharacters();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainContext value={{ data, addToCards, handleNewGame, openSettings }}>
      {children}
    </MainContext>
  );
};

export default MainContextProvider;
