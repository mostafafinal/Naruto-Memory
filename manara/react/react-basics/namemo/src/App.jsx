import data from "./data.js";
import shuffler from "./shuffler.js";
import Video from "./components/Video";
import Music from "./components/Music.jsx";
import Score from "./components/Score";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import "./App.css";
import Settings from "./components/Settings.jsx";

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

  const handleNewGame = () => {
    setSelected([]);
    setStatus("play");
    setCharacters(shuffler(characters));
  };

  const handleGoHome = () => {
    setSelected([]);
    setStatus(null);
    setCharacters(shuffler(characters));
  };

  return (
    <>
      <Video />
      {status === "play" && <Settings onClick={() => setStatus("rinnegan")} />}

      {status === "rinnegan" && (
        <Modal status={"lose"} message={"RINNEGAN!"}>
          <Button name={"Continue.."} onClick={() => setStatus("play")} />
          <Button name={"New Game"} onClick={handleNewGame} />
          <Button name={"Home"} onClick={handleGoHome} />
        </Modal>
      )}
      {status === null && (
        <Modal message={"Naruto Memory"}>
          <Button name={"Play"} onClick={() => setStatus("play")} />
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

      {status === "win" && (
        <Modal message={"EYES OF GOD!"} status={"win"}>
          <Button name={"New Game"} onClick={handleNewGame} />
          <Button name={"Home"} onClick={handleGoHome} />
        </Modal>
      )}
      {status === "lose" && (
        <Modal message={"USE YOUR RINNEGAN!"} status={"lose"}>
          <Button name={"Replay"} onClick={handleNewGame} />
          <Button name={"Home"} onClick={handleGoHome} />
        </Modal>
      )}

      <Music />
    </>
  );
}

export default App;
