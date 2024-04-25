/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css, createGlobalStyle } from 'styled-components';

const AccountGlobalStyle = createGlobalStyle`
  fieldset.MuiOutlinedInput-notchedOutline {
    border: none;
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
