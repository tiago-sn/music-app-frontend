import React from 'react';
import { ListItem, ListItemText, Link } from '@material-ui/core';

import { Music } from '../../services/api/musics/types';

interface IProps {
  music: Music;
}

const MusicListItem: React.FC<IProps> = ({ music }) => (
  <ListItem>
    <ListItemText primary={music.title} secondary={music.artist} />
    <Link href={music.video}>About</Link>
  </ListItem>
);

export default MusicListItem;
