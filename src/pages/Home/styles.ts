import styled from 'styled-components';

const HomeWrapper = styled.section`
  div.assets_wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  div.action_wrapper {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    & > section.icon_wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > img.icon_image {
        width: 30px;
        height: 30px;
        margin-bottom: 5px;
      }
    }
  }
`;

export {
  HomeWrapper,
};
