import React from 'react';
import { ListItem, ListItemText, Link } from '@material-ui/core';

import { Music } from '../../services/api/musics/types';

interface IProps {
  music: Music;
  i: number;
}

const MusicListItem: React.FC<IProps> = ({ music, i }) => (
  <ListItem key={i}>
    <ListItemText primary={music.title} secondary={music.artist} />
    <Link href={music.about}>About</Link>
  </ListItem>
);

export default MusicListItem;
