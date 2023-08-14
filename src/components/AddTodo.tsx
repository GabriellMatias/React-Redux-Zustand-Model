import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store";

export function AddTodo() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  function handleNewTodo(e: FormEvent) {
    e.preventDefault();
    dispatch(addTodo({
      newTodo
    }))
    setNewTodo('')
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Novo Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
