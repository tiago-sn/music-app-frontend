import React from 'react';
import { List, ListItem, ListItemText, Link } from '@material-ui/core';
import { Music } from '../../services/api/musics/types';

interface IProps {
  musicList: Music[];
}

const MovieList: React.FC<IProps> = ({ musicList }) => {
  // const list = musicList.map((music, i) => (
  //   <ListItem key={i}>
  //     <ListItemText primary={music.title} secondary={music.artist} />
  //     <Link href={music.about}>About</Link>
  //   </ListItem>
  // ));
  console.log('rendering <MusicList />');
  return (
    <List>
      {musicList &&
        musicList.map((music, i) => (
          <ListItem key={i}>
            <ListItemText primary={music.title} secondary={music.artist} />
            <Link href={music.about}>About</Link>
          </ListItem>
        ))}
    </List>
  );
};

export default MovieList;
