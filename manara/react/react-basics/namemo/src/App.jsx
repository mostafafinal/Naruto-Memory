import data from "./data.js";
import shuffler from "./shuffler.js";
import Video from "./components/Video";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState(data);
  const [seleted, setSelected] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setCharacters((chars) => [...shuffler(chars)]);
  }, []);

  const isSelected = (item, arr) => arr.includes(item);

  const handleSelect = (id) => {
    if (isSelected(id, seleted)) {
      setStatus("lose");

      return;
    }

    if (seleted.length + 1 === characters.length) {
      setStatus("win");

      return;
    }

    setCharacters((chars) => [...shuffler(chars)]);
    setSelected((prev) => [...prev, id]);
  };

  return (
    <>
      <Video />
      <div className="cards">
        {characters.map((char) => (
          <Card
            key={char.id}
            img={char.img}
            name={char.name}
            onSelect={() => handleSelect(char.id)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
