import { createSlice } from "@reduxjs/toolkit";

const initialState={
    employees:[],
}

const empSlice=createSlice({
    name:'employees',
    initialState,
    reducers:{
        addEmployees: (state,action)=>{
            state.employees.push(action.payload);
        },
        removeEmployees : (state,action)=>{
            state.employees=state.employees.filter((employee) => employee.id !== action.payload )
        },
        updateEmployees:(state,action)=>{
            const { id, updatedEmployee } = action.payload;
      const employeeToUpdate = state.employees.find(
        (employee) => employee.id === id
      );
      if (employeeToUpdate) {
        Object.assign(employeeToUpdate, updatedEmployee);
      }
        },
    }
});

export const {addEmployees,removeEmployees,updateEmployees}=empSlice.actions;
export default empSlice.reducer;