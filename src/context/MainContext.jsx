import { createContext, useContext, useReducer, useState } from 'react';
import characters from '../lib/data';
import dataReducer from '../reducer/dataReducer';

const INITIAL_STATE = {
  characters: characters,
  score: 0,
  target: characters.length,
  status: null,
};

const MainContext = createContext(INITIAL_STATE);

export const useMainData = () => useContext(MainContext);

const MainContextProvider = ({ children }) => {
  const [data, dispatch] = useReducer(dataReducer, INITIAL_STATE);
  const [selectedCards, setSelectedCards] = useState([]);

  const rinnegan = () => {
    dispatch({
      type: 'new_game',
      data: INITIAL_STATE,
    });

    setSelectedCards([]);
  };

  const openSettings = () => dispatch({ type: 'rinnegan' });

  const sharingan = () => dispatch({ type: 'sharingan' });

  const incrementScore = () => dispatch({ type: 'increment_score' });

  const addToCards = id => {
    try {
      if (!id) throw Error;

      if (selectedCards.includes(id)) return dispatch({ type: 'lose' });

      setSelectedCards([...selectedCards, id]);
      setTimeout(() => dispatch({ type: 'shuffle_characters' }), 1000);

      incrementScore();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainContext
      value={{
        data,
        addToCards,
        rinnegan,
        openSettings,
        sharingan,
      }}
    >
      {children}
    </MainContext>
  );
};

export default MainContextProvider;
