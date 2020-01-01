import React, { useEffect, useState } from 'react';
import MusicList from './Components/MusicList';
import api from './services/api';

const App: React.FC = () => {
  const [musicList, setMusicList] = useState();

  useEffect(() => {
    console.log('useEffect');

    const data = api.getMusicList();
    setMusicList(data);
  }, []);

  console.log('rendering <App />');
  return (
    <div className="App">
      <header className="App-header">
        <p>Music App</p>
        <MusicList musicList={musicList} />
      </header>
    </div>
  );
};

export default App;
