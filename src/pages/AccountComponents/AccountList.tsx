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

import { useDispatch } from 'react-redux';

import { blue } from '@mui/material/colors';

import { changeCurrentAccount } from '../../store/accountsSlice';

import { SelectAccountWrapper } from '../styles';

const AccountList = (props: any) => {
  const { Accounts, outerDispatch } = props;

  const reduxDispatch = useDispatch();

  return (
    <List sx={{ pt: 0 }}>
      {
        Accounts.map((account: any) => {
          const address = account.address;
          const [front, end] = [address.slice(0, 7), address.slice(-7)];
          return (
            <ListItem
              button
              onClick={() => {
                reduxDispatch(changeCurrentAccount(account));
                console.log('%c 9999999 account is:', 'color: #0f0;', account);
                const { title, address } = account;
                outerDispatch({
                  accountValue: title,
                  address
                });
              }}
              key={account.address}
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
                    {/* <span className="public_key" title={address}>{address}</span> */}
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
