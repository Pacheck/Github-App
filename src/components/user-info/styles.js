import styled from 'styled-components';

const UserInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 10px;

  text-decoration: none;

  img {
    height: 200px;
    width: 200px;
    padding: 10px;
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
    margin: 0 auto;
  }

  .user-name a {
    color: blueviolet;
    padding: 3px;
    text-decoration: none;
  }

  .repos-info {
    margin: 0 auto;
  }

  @media (max-width: 515px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export default UserInfo;
