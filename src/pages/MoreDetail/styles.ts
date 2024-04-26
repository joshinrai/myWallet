import styled from 'styled-components';

const MoreDetailWrapper = styled.section`

`;

const MoreIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 10px;
  text-align: center;
  line-height: 24px;
  writing-mode: vertical-lr;
  cursor: pointer;
`;

const ActionLineWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  & > img.more_icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

export {
  MoreDetailWrapper,
  MoreIcon,
  ActionLineWrapper,
};
