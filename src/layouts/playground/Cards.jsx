import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { useMainData } from '../../context/MainContext';

const Cards = () => {
  const [flip, setFlip] = useState(false);
  const { data, addToCards } = useMainData();

  useEffect(() => {
    setTimeout(() => setFlip(flip => !flip), 1300);
  }, [data.score]);

  return (
    <div className='cards'>
      {data.characters.map(char => (
        <Card
          key={char.id}
          img={char.img}
          name={char.name}
          flip={flip}
          onSelect={() => {
            setFlip(flip => !flip);
            addToCards(char.id);
          }}
        />
      ))}
    </div>
  );
};

export default Cards;
