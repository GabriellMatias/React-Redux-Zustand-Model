import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

// pedacos menores de estados do app, separados
const todoSlice = createSlice({
  name: "todo",
  initialState: ["fazer cafe", "estudar redux"],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload.newTodo);
    }, // adiciona um novo item ao estado
  },
});

export const store = configureStore({
  //reducer sao as informacoes que vao ser compartilhadas entre todos os componentes do app
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const { addTodo } = todoSlice.actions;

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
