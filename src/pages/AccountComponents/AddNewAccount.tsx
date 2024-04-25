/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react';

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

const AddNewAccount = () => {
  return (
    <List sx={{ pt: 0 }}>
      <ListItem
        autoFocus
        button
        onClick={() => {
          console.log('%c 2222222 添加新账户 ...', 'color: #ff0;');
        }}
      >
        <ListItemAvatar>
          <Avatar>
            <AddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="add a new account" />
      </ListItem>

      <ListItem
        autoFocus
        button
        onClick={() => {
          console.log('%c 2222222 导入账户 ...', 'color: #ff0;');
        }}
      >
        <ListItemAvatar>
          <Avatar>
            <AddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="导入账户" />
      </ListItem>

      <ListItem
        autoFocus
        button
        onClick={() => {
          console.log('%c 2222222 添加硬件钱包 ...', 'color: #ff0;');
        }}
      >
        <ListItemAvatar>
          <Avatar>
            <AddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="添加硬件钱包" />
      </ListItem>
    </List>
  );
};

export default memo(AddNewAccount);
