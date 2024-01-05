import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/CounterSlice"
import todosReducer from "../Features/Todos/todosSlice"
import empReducer from "../Features/EMP/EmpSlice"
const store = configureStore({
    reducer:{
        counter:counterReducer,
        todos:todosReducer,
        employees:empReducer,
    }
})

export default store;