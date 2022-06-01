import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5%;

  background-color: ${props => props.theme.colors.tangerine};

  main {
    width: clamp(400px, 50%, 700px);

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    width: 100%;
    text-align: center;
    font-family: serif;
    font-size: 4rem;
    color: ${props => props.theme.colors.eggWhite};

    margin-bottom: 1rem;
  }

  h3 {
    width: 100%;
    text-align: right;
    font-size: 2rem;
    font-weight: 400;
    color: ${props => props.theme.colors.eggWhite};

    margin-bottom: 3rem;
  }

  p {
    width: 100%;
    text-align: left;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.blackCoral};

    margin-bottom: 1rem;
  }
`;

export const Card = styled.div`
  align-self: flex-start;

  border-radius: 1rem;
  border: 3px solid black;
  box-shadow: 6px 6px 0px 0px black;

  padding: 1.5rem;

  background-color: white;

  display: flex;
  flex-direction: column;

  span {
    font-size: 1rem;
    font-weight: bold;
    /* text-decoration: underline; */
    color: black;

    margin-bottom: 0.75rem;
  }

  ul {
    list-style-position: inside;

    li {
      color: ${props => props.theme.colors.blackCoral};
      font-size: 0.875rem;
      font-weight: 600;
    }
  }
`;
