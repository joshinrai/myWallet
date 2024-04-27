import styled from 'styled-components';

const WelcomWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div.welcom_content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ImportPrivateKeyWrapper = styled.section`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export {
  WelcomWrapper,
  ImportPrivateKeyWrapper,
};
