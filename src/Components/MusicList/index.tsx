import React from 'react';
import { List } from '@material-ui/core';
import { Music } from '../../services/api/musics/types';

import MusicListItem from '../MusicListItem';

interface IProps {
  musicList: Music[];
}

const MovieList: React.FC<IProps> = ({ musicList }) => {
  return (
    <List>
      {musicList &&
        musicList.map((music, i) => <MusicListItem music={music} i={i} />)}
    </List>
  );
};

export default MovieList;
