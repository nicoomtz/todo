import { Boton, Container, Titulo } from "./Task.elements";
import { useState, useEffect, createRef, useRef } from "react";

import React from "react";

const Task = ({ title, id, checked, handleCheck, handleDelete }) => {
  const [check, setCheck] = useState(checked);
  const [titulo, setTitulo] = useState("");
  const inputRef = useRef();
  const newTitulo = titulo;

  async function handleEdit(e) {
    setTitulo(inputRef.current.value);
    const edit = prompt("Reescribe tu tarea:");
    if (edit !== null) {
      setTitulo(edit);
      inputRef.current.value = edit;
    }
    if (edit === null) {
      inputRef.current.value = inputRef.current.value;
      setTitulo(newTitulo);
    }
  }

  return (
    <Container id={id} key={id}>
      <p
        type="text"
        checked={check ? true : false}
        // value={titulo !== "" ? titulo : title}
        id={id}
        ref={inputRef}
      >
        {titulo !== "" ? titulo : title}
      </p>
      <div className="btn-container">
        <Boton onClick={handleCheck} id={id}>
          Check
        </Boton>
        <Boton onClick={(e) => handleEdit(e)} id={id}>
          Edit
        </Boton>
        <Boton onClick={handleDelete} id={id}>
          X
        </Boton>
      </div>
    </Container>
  );
};

export default Task;
