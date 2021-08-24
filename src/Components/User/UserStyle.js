import styled from "styled-components";

export const UserContainer = styled.div`
  background-color: white;
  grid-area: 'user';
  grid-area: user;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: fit-content;
  width: fit-content;
  max-width: 300px;
  min-width: 200px;
  margin: 0 auto;

  p{
    display: flex;
  }
  span{
    margin-left: 8px;
  }

  img {
    width: 100%;
    padding: 8px;
  }
  button{
    display: block;
    width: 90%;
    margin: 8px auto;
    border-radius: 4px;
    border-color: transparent;
    padding: 8px;
    border: 1px solid #d7d7d7;
    background: #6933ff;
    font-weight: 400;
    font-size: 1rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
  a{
    text-decoration: none;
  }
`
export const Status = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
  margin-top: 8px;
  p{
    margin-bottom: 8px;
  }
  .work{
    color: ${({info}) => info ? 'black' : 'green'};
  }
`