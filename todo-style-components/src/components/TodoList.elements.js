import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  width: 400px;
  margin: 50px auto;
  justify-content: space-around;
  align-items: center;

  input,
  button {
    border: none;
    outline: 2px solid black;
    border-radius: 20px;
    background-color: white;
    padding: 10px;
  }

  button {
    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
      outline: 2px solid white;
      transition: 500ms all ease;
    }
  }
`;
