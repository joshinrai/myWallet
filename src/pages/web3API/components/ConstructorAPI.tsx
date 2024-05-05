import { memo } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Web3 from 'web3';

const ConstructorAPI = () => {
  let ethInstance: any;

  try {
    const providerUrl = import.meta.env.VITE_PROJECT_SEPOLIA_PROVIDER;
    const web3Instance = new Web3(`${providerUrl}`);
    ethInstance = web3Instance.eth;
  } catch (e) {
    console.log('err 1 is:', 'color: #f00;', e, '请安装钱包');
  }

  return (
    <Box
      sx={{ width: '100%', height: 'auto', bgcolor: 'background.dark' }}
    >
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="getChainId"
                onClick={async () => {
                  const res: any = await ethInstance?.getChainId?.();
                  console.log('%c 9999999 res is:', 'color: #0f0;', res);
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default memo(ConstructorAPI);
