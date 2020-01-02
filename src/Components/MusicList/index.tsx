import React from 'react';
import { List, CircularProgress } from '@material-ui/core';
import { Music } from '../../services/api/musics/types';

import MusicListItem from '../MusicListItem';

interface IProps {
  musicList: Music[];
}

const MovieList: React.FC<IProps> = ({ musicList }) => {
  return (
    <List>
      {musicList ? (
        musicList.map((music, i) => <MusicListItem music={music} key={i} />)
      ) : (
        <CircularProgress />
      )}
    </List>
  );
};

export default MovieList;
