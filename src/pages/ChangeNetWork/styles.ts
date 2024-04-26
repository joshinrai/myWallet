import styled from 'styled-components';

const ChangeNetWorkWrapper = styled.div`
  & > button {
    margin-left: 0!important;
    padding: 0!important;
    width: 60px;
    height: 30px;
    border-radius: 15px;
  }
`;

const IconWrapper = styled.section`
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: #000;
  display: flex;
  align-items: center;
  cursor: pointer;
  div.net_icon {
    margin-left: 10px;
    background-image: url('/ethereum.svg');
    width: 20px;
    height: 20px;
    border-radius: 10px;
  }
  div.drop_down {
    width: 8px;
    height: 8px;
    border: 1px solid #fff;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
    margin-left: 10px;
    margin-top: -4px;
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
  ChangeNetWorkWrapper,
  IconWrapper,
  DialogTitleWrapper,
};
