// import "../styles/Music.css";

import { useState, useRef } from "react";

const Music = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleAudioPlay = () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);

      return;
    }

    audioRef.current.play();
    setPlaying(true);
  };

  return (
    <>
      <audio ref={audioRef} src="/src/assets/ninja-way.mp3" loop></audio>
      <button onClick={handleAudioPlay}>
        {playing ? (
          <span class="material-symbols-outlined">music_note</span>
        ) : (
          <span class="material-symbols-outlined">music_off</span>
        )}
      </button>
    </>
  );
};

export default Music;
