import styled from 'styled-components';

const LoginWrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-width: 400px;
  min-height: 600px;
  background-color: #242424;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div.login_content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export {
  LoginWrapper,
}
