import Video from './components/Video';
import Music from './components/Music.jsx';
import { useState } from 'react';
import HomeLayout from './layouts/HomeLayout.jsx';
import PlaygroundLayout from './layouts/playground/PlaygroundLayout.jsx';
import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Video />
      {!isPlaying && <HomeLayout onPlay={() => setIsPlaying(true)} />}
      {isPlaying && <PlaygroundLayout onQuit={() => setIsPlaying(false)} />}
      <Music />
    </>
  );
}

export default App;
