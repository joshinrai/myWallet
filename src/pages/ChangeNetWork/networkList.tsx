import { memo } from 'react';

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

import { blue } from '@mui/material/colors';

import { SelectAccountWrapper } from '../styles';

const NetworkList = (props: any) => {
  const { netWorkList, outerDispatch } = props;

  return (
    <List sx={{ pt: 0 }}>
      {
        netWorkList.map((netWork: any) => {
          return (
            <ListItem
              button
              onClick={() => {
                console.log('点击item...');
              }}
              key={netWork.key}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <SelectAccountWrapper>
                <div className="account">
                  <span>{netWork.name}</span>
                </div>
              </SelectAccountWrapper>
            </ListItem>
          );
        })
      }

      <ListItem
        autoFocus
        button
        onClick={() => {
          console.log('%c 2222222 add account ...', 'color: #ff0;');
          outerDispatch({
            showAccountList: false,
          });
        }}
      >
        <ListItemAvatar>
          <Avatar>
            <AddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="添加网络" />
      </ListItem>
    </List>
  );
}

export default memo(NetworkList);
