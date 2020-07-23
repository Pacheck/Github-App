import styled from 'styled-components';

const StyledRepos = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;
  align-content: center;

  h2 {
    display: flex;
    justify-items: center;
  }

  .titulo {
  }

  ul {
    padding: 0px;
    width: 100%;
    max-width: 375px;
  }

  li {
    list-style: none;
    align-items: center;
  }

  a {
    display: flex;
    flex-direction: row;

    font-family: 'Rowdies', cursive;

    ${(props) =>
      props.isDark
      ? 'background-color: #F3F4F6; border: solid 1px #b8babc; color: #000;'
      : 'background-color: #1d2121; border: solid 1px #c3e2e3; color: #FFF;'}

    border-radius: 10px;

    padding: 20px;
    margin: 10px 0px;

    text-decoration: none;
    justify-content: center;


    animation: linkHover 10s linear 0s infinite normal none running;

    :hover {
      /* color: #000;  
      background-color: #d1caca;
      transition: background-color 700ms;
      transition: color 400ms; */


      /* background: linear-gradient(45deg, 
        rgb(255, 0, 0), 
        rgb(255, 115, 0), 
        rgb(255, 251, 0), 
        rgb(72, 255, 0), 
        rgb(0, 255, 213), 
        rgb(0, 43, 255), 
        rgb(122, 0, 255),
        rgb(255, 0, 200), 
        rgb(255, 0, 0)
      ) 0% 0  /  400%; */

      background-image: linear-gradient(
        45deg, 
        rgb(255, 0, 0), 
        rgb(255, 115, 0), 
        rgb(255, 251, 0),
        rgb(72, 255, 0), 
        rgb(0, 255, 213), 
        rgb(0, 43, 255), 
        rgb(122, 0, 255), 
        rgb(255, 0, 200), 
        rgb(255, 0, 0)
      );

      @keyframes linkHover{
       
      }


      /* animation-duration: 20s;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-fill-mode: none;
      animation-play-state: running;
      animation-name: dvWuPe; */

      transition: opacity 0.3s ease-in-out 0s;
      /* transition-property: opacity;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;         */

        //End Hover
    }

    :focus {
      /* background-color: #d1caca;
      ${(props) => (props.isDark ? 'color: #000' : 'color: #000')} */

      /* border: 2px solid; */
      border-radius: 10px;
      border-image-slice: 1;
      border-image-source: conic-gradient(
        hsl(100 100% 60%),
        hsl(200 100% 60%),
        hsl(100 100% 60%),
        hsl(200 100% 60%)
      )

    }
  }

  @media (max-width: 524px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledRepos;
