// setLocked(锁定)

import { memo, useReducer } from 'react';

import {
  Dialog,
  List,
  ListItem,
} from '@mui/material';

import { MoreDetailWrapper, MoreIcon, ActionLineWrapper } from './styles';

const MoreActions = [
  {
    icon: '/wireless.svg',
    title: '已连接的网站',
    key: 'link',
  },
  {
    icon: '/lock.svg',
    title: '锁定MetaMask',
    key: 'lock',
  }
];

const initialState = {
  showDialog: false,
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

const MoreDetail = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { showDialog } = state;

  return (
    <MoreDetailWrapper>
      <MoreIcon
        onClick={() => {
          dispatch({ showDialog: true });
        }}
      >
        ...
      </MoreIcon>
      <Dialog
        onClose={() => {
          dispatch({ showDialog: false });
        }}
        open={showDialog}
        sx={{
          minWidth: {
            xs: 300,
            md: 300,
          }
        }}
      >
        <List sx={{ pt: 0 }}>
          {
            MoreActions.map((action: any) => {
              return (
                <ListItem
                  button
                  onClick={() => {
                    console.log('', '');
                  }}
                  key={action.key}
                >
                  <ActionLineWrapper>
                    <img src={action.icon} alt={action.title} className="more_icon" />
                    <span>{action.title}</span>
                  </ActionLineWrapper>
                </ListItem>
              );
            })
          }
        </List>
      </Dialog>
    </MoreDetailWrapper>
  );
};

export default memo(MoreDetail);
