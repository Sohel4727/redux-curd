import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo : (state,action)=> {
                state.todos.push(action.payload);
        },
        removeTodo : (state,action)=>{
                state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleTodo : (state,action)=>{
                state.todos = state.todos.map((todo)=> todo.id === action.payload ? {...todo, completed : !todo.completed} : todo)
        },
        updateTodo:(state,action)=>{
                const {id,text}=action.payload;
                const todoToupdate= state.todos.find((todo)=> todo.id ===id);
                if (todoToupdate){
                    todoToupdate.text=text;
                }
        }
    }
});

export const {addTodo,removeTodo,toggleTodo,updateTodo} = todosSlice.actions;

export default todosSlice.reducer;