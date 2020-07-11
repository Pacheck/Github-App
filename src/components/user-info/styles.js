import styled from 'styled-components';

const UserInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;

  img {
    height: 200px;
    width: 200px;
    padding: 1px;
    margin: 0 auto;
    border-radius: 15px;
  }
  .user-info {
    display: flex;
  }

  .git-info {
  }

  .user-name a {
    color: blueviolet;
    padding: 3px;
    text-decoration: none;
  }

  .repos-info {
  }
`;

export default UserInfo;
