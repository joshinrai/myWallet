import styled from 'styled-components';

const ImportPrivateKeyWrapper = styled.section`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > span.account_address, span.show_pri_key {
    display: inline-block;
    width: 300px;
    white-space: pre-wrap;
    word-break: break-all;
    text-align: center;
  }
`;

const MoreIcon = styled.div`
  width: 10px;
  height: 24px;
  border-radius: 10px;
  text-align: center;
  line-height: 24px;
  writing-mode: vertical-lr;
  cursor: pointer;
`;

export {
  ImportPrivateKeyWrapper,
  MoreIcon,
};
