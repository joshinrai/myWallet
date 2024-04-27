import { memo, useReducer } from 'react';

import {
  IconButton,
  DialogTitle,
  Dialog,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import NetworkList from './networkList';

import { ChangeNetWorkWrapper, IconWrapper, DialogTitleWrapper } from './styles';

const netWorkList = [
  {
    icon: '',
    name: 'Sepolia',
    key: '1',
  },
  {
    icon: '',
    name: 'Linea Sepolia',
    key: '10086',
  },
];

const initialState = {
  showDialog: false,
};
const reducer = (state: any, payload: any) => ({ ...state, ...payload });

const ChangeNetWork = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { showDialog } = state;

  return (
    <ChangeNetWorkWrapper>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => {
          dispatch({ showDialog: true });
          console.log('%c 999999 添加网络...', 'color: #0f0;');
        }}
      >
        <IconWrapper>
          <div className="net_icon" />
          <div className="drop_down" />
        </IconWrapper>
      </IconButton>

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
        <DialogTitle>
          <DialogTitleWrapper>
            选择网络
            <CloseIcon
              onClick={() => {
                dispatch({ showDialog: false });
              }}
            />
          </DialogTitleWrapper>
        </DialogTitle>
        <NetworkList
          netWorkList={netWorkList}
          outerDispatch={dispatch}
        />
      </Dialog>
    </ChangeNetWorkWrapper>
  );
};

export default memo(ChangeNetWork);
