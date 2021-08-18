import styled from "styled-components";

export const UserContainer = styled.div`
    background-color: white;
    grid-area: 'user';
    grid-area: user;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    height: fit-content;
    min-width: 200px;

    a {
    font-size: 12px;
    color: #2E7BB4;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    img {
      width: 16px;
      height: 16px;
      margin-right: 5px; 
    }
  }
`