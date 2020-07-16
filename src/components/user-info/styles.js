import styled from 'styled-components';

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 16px 0px;
  align-items: center;

  text-decoration: none;

  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
  }

  ul {
    list-style: none;
  }

  li {
    margin: 10px;
  }

  .git-info {
    box-sizing: content-box;
  }

  .user-name a {
    font-family: 'Rowdies', cursive;
    color: blueviolet;
    padding: 3px;
    text-decoration: none;
  }

  @media (max-width: 524px) {
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      justify-content: center;
    }
  }
`;

export default UserInfo;
