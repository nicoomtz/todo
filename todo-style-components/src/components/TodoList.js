import React, { useEffect } from "react";
import { Container, Form } from "./TodoList.elements.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task.js";

export default function TodoList() {
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input !== "") {
      const newTarea = {
        title: input,
        checked: false,
        id: uuidv4(),
      };
      setTareas([newTarea, ...tareas]);
      console.log(tareas);
    }
    setInput("");
  }

  function handleCheck(e) {
    let id = e.target.id;
    tareas.forEach((tarea) => {
      if (tarea.id === id) {
        tarea.checked = !tarea.checked;
      }
    });
    tareas.forEach((tarea) => {
      if (tarea.checked === true) {
        let element = document.getElementById(`${tarea.id}`);
        element.querySelector(`p`).classList.add("checked");
      }
      if (tarea.checked !== true) {
        let element = document.getElementById(`${tarea.id}`);
        element.querySelector(`p`).classList.remove("checked");
      }
    });
  }

  function handleDelete(e) {
    const newArrayTareas = tareas.filter((tarea) => tarea.id !== e.target.id);
    setTareas(newArrayTareas);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Añade una tarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Crear Tarea</button>
      </Form>
      {tareas.map((tarea) => (
        <Task
          title={tarea.title}
          checked={tarea.checked}
          id={tarea.id}
          key={tarea.id}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
}
