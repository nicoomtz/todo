import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  margin: 15px auto;
  padding: 10px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: monospace;
  border-radius: 10px;
  .checked {
    text-decoration: line-through;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 1.2rem;
    min-height: 15px;
    background-color: #444444;
    color: white;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 10px 20px 10px 20px;
    overflow-wrap: break-word;
    inline-size: 150px;
  }
`;

export const Boton = styled.button`
  cursor: pointer;
  font-family: monospace;
  flex-direction: column;
  margin: 0px 5px;
  padding: 5px;
  border-radius: 10px;
  background-color: ${(props) => (props.color ? props.color : "white")};
  border: none;
  outline: 2px solid black;

  &:hover {
    background-color: black;
    color: white;
    outline: 2px solid white;
    transition: 300ms all ease;
  }
`;
