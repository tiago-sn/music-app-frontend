import React, { useEffect, useState } from 'react';
import MusicList from './Components/MusicList';
import api from './services/api';
import { Container, AppBar } from '@material-ui/core';
import { useStyles } from './app.styles';
import { Music } from './services/api/musics/types';

const App: React.FC = () => {
  const [musicList, setMusicList] = useState<Music[] | null>(null);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getMusicList();
      setMusicList(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <AppBar component="header">
        <p>Music App</p>
      </AppBar>
      <Container component="main" className={classes.main} maxWidth="xs">
        <MusicList musicList={musicList} />
      </Container>
    </div>
  );
};

export default App;
