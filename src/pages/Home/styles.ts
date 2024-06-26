import styled from 'styled-components';

const HomeWrapper = styled.section`
  div.assets_wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    & > section {
      & > span.account_count {
        font-weight: 600;
        margin-right: 5px;
      }
    }
  }
  div.action_wrapper {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    & > section.icon_wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      & > img.icon_image {
        width: 30px;
        height: 30px;
        margin-bottom: 5px;
      }
    }
  }
`;

const DialogTitleWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > svg {
    cursor: pointer;
  }
`;

const TransferWrapper = styled.section`
  width: 550px;
  & > div.transfer_wrapper {
    margin-top: 10px;
    display: flex;
    align-items: center;
    & > .left_content {
      flex: 1;
      display: flex;
      & > div.max_button {
        height: 30px;
        line-height: 30px;
        padding: 5px 10px;
        border: 1px solid #1677ff;
        border-radius: 15px;
        cursor: pointer;
        color: #1677ff;
      }
    }
    & > section.right_content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 400px;
      border: 1px solid #ccc;
      border-radius: 5px;
      & > img.balance_img {
        width: 50px;
        height: 50px;
        margin-right: 20px;
        margin-left: 10px;
      }
      & > div.balance_count {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
      }
      & > img.exchange_img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      & > div.amount_wrapper {
        & > span.amount_unit {
          display: inline-block;
          margin-top: 10px;
        }
      }
    }
  }

  & > div.gas_wrapper {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 10px;
    padding: 5px 10px;
    & > section.gas_content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span.estimated_fee {
        font-size: 14px;
      }
      div.market_content {
        font-size: 12px;
      }
    }
  }

  & > div.footer_button_wrapper {
    margin-top: 20px;
    border-top: 1px solid #ccc;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
  }
`;

const TransferConfirmWrapper = styled.section`
  & > h4.confirm_title {
    border: 1px solid #ccc;
    padding: 2px 5px;
    width: max-content;
    margin: 0;
    border-radius: 4px;
    margin-top: 10px;
  }

  & > div.amount_wrapper {
    & > span.amount_label {
      font-size: 12px;
    }
    & > span.amount_number {
      font-size: 14px;
    }
  }

  & > div.container_wrapper {
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 16px;
    & > div.split_wrapper {
      display: flex;
      justify-content: space-between;
      & > span.total_max_label {
        font-size: 14px;
      }
      & > span.total_max_number {
        font-size: 14px;
      }
    }
  }
`;

const TransactionHistoryWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    margin-top: 20px;
    cursor: pointer;
    & > div.split_wrapper {
      display: flex;
      justify-content: space-between;
      & > span.recieve_status {
        font-weight: 600;
      }
      & > span.trans_status {

      }
    }
  }
`;

const TransactionDetailWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  & > li {
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    overflow: auto;
    & > span.key {
      margin-right: 10px;
    }
  }
`;

export {
  HomeWrapper,
  DialogTitleWrapper,
  TransferWrapper,
  TransferConfirmWrapper,
  TransactionHistoryWrapper,
  TransactionDetailWrapper,
};
