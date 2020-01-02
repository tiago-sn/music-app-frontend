import React, { useEffect, useState } from 'react';
import MusicList from './Components/MusicList';
import api from './services/api';
import { Container, AppBar } from '@material-ui/core';
import { useStyles } from './app.styles';

const App: React.FC = () => {
  const [musicList, setMusicList] = useState();
  const classes = useStyles();

  useEffect(() => {
    const data = api.getMusicList();
    setMusicList(data);
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
