import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleTodo,
  updateTodo
} from "../Redux/Features/Todos/todosSlice";
import { v4 as uuidv4 } from "uuid";
const TodoList = () => {
  const [text, setText] = useState("");
  const [editId,setEditId]=useState(null);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  console.log("todos==>", todos);

  const handleAdd = () => {
    if (text.trim() !== "") {
        if(editId){
            dispatch(updateTodo({
                id:editId,
                text:text
            }));
            setEditId(null);
        } else{
            dispatch(
              addTodo({
                id: uuidv4(),
                text: text,
                completed: false,
              })
            );
        }
      setText("");
    }
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEdit=(id,text)=>{
    setEditId(id);
    setText(text);
  }
  return (
    <div>
      <h1>Todo List </h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>{editId ? "Update" : '+Add'}</button> <br />
      <ul>
        {todos.map((item) => (
          <>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggleTodo(item.id)}
            />
            <span
              key={item.id}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>
            <button onClick={() => handleRemove(item.id)}>X</button> 
            <button onClick={()=>handleEdit(item.id,item.text)}>Edit</button><br />
          </>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
