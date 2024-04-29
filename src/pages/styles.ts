/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css, createGlobalStyle } from 'styled-components';

const AccountGlobalStyle = createGlobalStyle`
  fieldset.MuiOutlinedInput-notchedOutline {
    border: none;
  }
  div.MuiDialog-container > div.MuiPaper-root > h2.css-bdhsul-MuiTypography-root-MuiDialogTitle-root {
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 1;
  }
`;

const CommonAddressCss = css`
  & > section.text_wrapper {
    position: relative;
    // width: 200px;
    & > span.public_key {
      width: 50%;
      display: block;
      text-align: justify;
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        content: attr(title);
        width: 50%;
        float: right;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        direction: rtl;
        transform: translateX(-15px);
      }
    }
  }
`;

const AccountWrapper: any = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    cursor: pointer;
    &.top_wrapper {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      & > img.crypto_account {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
      & > div.expand_more {
        width: 10px;
        height: 10px;
        border: 1px solid #fff;
        border-top: none;
        border-left: none;
        transform: rotate(45deg);
        margin-top: -5px;
        margin-left: 10px;
      }
    }
    &.bottom_wrapper {
      ${CommonAddressCss};
    }
  }
`;

const SelectAccountWrapper = styled.div`
  width: 100%;
  div {
    display: flex;
    justify-content: space-between;
    &.account {

    }
    &.address {
      ${CommonAddressCss};
      & > section.account_balance {
        margin-left: 10px;
        display: flex;
        align-items: center;
        & > span.account_count {
          display: inline-block;
          max-width: 80px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 600;
        }
        & > span.balance_unit {
          margin-left: 5px;
        }
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

export {
  AccountGlobalStyle,
  AccountWrapper,
  SelectAccountWrapper,
  DialogTitleWrapper,
};
