import { useState } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  );
}

export default App;
