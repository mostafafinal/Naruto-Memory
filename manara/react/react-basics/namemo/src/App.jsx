import data from "./data.js";
import shuffler from "./shuffler.js";
import Video from "./components/Video";
import Card from "./components/Card";
import Score from "./components/Score";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Button from "./components/Button";
import "./App.css";
import Music from "./components/Music.jsx";

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
      {status === null && (
        <Modal message={"Naruto Memory"}>
          <Button onClick={() => setStatus("play")} />
        </Modal>
      )}
      {status === "play" && (
        <>
          <Score score={seleted.length} target={characters.length} />
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
      )}

      {status === "win" && <Modal message={"EYES OF GOD!"} status={"win"} />}
      {status === "lose" && (
        <Modal message={"USE YOUR RINNEGAN!"} status={"lose"} />
      )}

      <Music />
    </>
  );
}

export default App;
