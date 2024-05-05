import { memo } from 'react';

import {
  Dialog,
  DialogTitle,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {
  DialogTitleWrapper,
  TransactionDetailWrapper,
} from './styles';

const TransferDetail = (props: any) => {
  const { outerDispatch, showDetailDialog, transDetailItem } = props;
  console.log('%c 9999999999 transDetailItem is:', 'color: #ff0;', transDetailItem);

  return (
    <Dialog
      onClose={() => {
        outerDispatch({
          showDialog: false,
          transDetailItem: null,
        });
      }}
      open={showDetailDialog}
      sx={{
        minWidth: {
          xs: 300,
          md: 600,
        }
      }}
    >
      <DialogTitle>
        <DialogTitleWrapper>
          交易详情
          <CloseIcon
            onClick={() => {
              outerDispatch({
                showDetailDialog: false,
                transDetailItem: null,
              });
            }}
          />
        </DialogTitleWrapper>
      </DialogTitle>

      <TransactionDetailWrapper>
        {
          transDetailItem ? Object.keys(transDetailItem).map((key: any) => (
            <li key={key}>
              <span className="key">{key}</span>
              <span>{transDetailItem[key]}</span>
            </li>
          )) : null
        }
      </TransactionDetailWrapper>
    </Dialog>
  );
};

export default memo(TransferDetail);
