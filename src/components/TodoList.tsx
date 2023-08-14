import { useAppSelector } from "../store";

export function TodoList() {
  //ta retornando toda aquela variavel store
  const todoStore = useAppSelector((store) => {
    return store.todo;
  });
  return (
    <ul>
      {todoStore.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
