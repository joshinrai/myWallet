/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
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

const AccountList = (props: any) => {
  const { Accounts, outerDispatch } = props;

  return (
    <List sx={{ pt: 0 }}>
      {
        Accounts.map((account: any) => {
          const publicKey = account.publicKey;
          const [front, end] = [publicKey.slice(0, 7), publicKey.slice(-7)];
          return (
            <ListItem
              button
              onClick={() => {
                const { title, publicKey } = account;
                outerDispatch({
                  accountValue: title,
                  publicKey
                });
              }}
              key={account.publicKey}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <SelectAccountWrapper>
                <div className="account">
                  <span>{account.title}</span>
                  <span>{account.currency}</span>
                </div>
                <div className="address">
                  <section className="text_wrapper">
                    <span className="front_span">{front}</span>
                    <span className="ellipses_span">...</span>
                    <span className="end_span">{end}</span>
                    {/* <span className="public_key" title={publicKey}>{publicKey}</span> */}
                  </section>
                  <span>{account.balance}</span>
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
        <ListItemText primary="Add account or hardware wallet" />
      </ListItem>
    </List>
  );
};

export default memo(AccountList);
