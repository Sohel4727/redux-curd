import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployees, removeEmployees, updateEmployees } from "../Redux/Features/EMP/EmpSlice";
import { v4 as uuidv4 } from "uuid";
const Employee = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editId,setEditId]=useState(null);
  const [update,setUpdate]=useState(false)
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
  });

  const dispatch = useDispatch();
  const empList = useSelector((state) => state.employees.employees);

  const handleShowDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setUserData({
      firstName:'',
      lastName:'',
      phone:'',
      address:''

    })
    setDialogOpen(false);
  };

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const editEmp=(item,id)=>{
    setEditId(id);
    setDialogOpen(true);
    setUpdate(true);
    setUserData(item);
  }

  const handleAdd = () => {

    if(update){
      dispatch(updateEmployees({
        id:editId,
        updatedEmployee: userData, 
      }))
      setDialogOpen(false);
      setUpdate(false);
    }else{
      const newUserData = {
        id: uuidv4(),
        ...userData,
      };
      console.log("userData", newUserData);
      dispatch(addEmployees(newUserData));
    }

    setUserData({
      firstName:'',
      lastName:'',
      phone:'',
      address:''

    })
    setDialogOpen(false);
  };

  const removeEmp = (id) => {
    dispatch(removeEmployees(id));
  };

  return (
    <>
      <h1>Employee Management Application</h1>
      <div>
        <button onClick={handleShowDialog}>+Add</button>
        {dialogOpen && (
          <dialog open>
            <div>
              <label htmlFor="">First Name : </label>
              <input
                type="text"
                onChange={handleChange}
                name="firstName"
                value={userData.firstName}
              />{" "}
              &nbsp; &nbsp;
              <button onClick={handleCloseDialog}>X</button> <br />
              <label htmlFor=""> Last Name : </label>
              <input
                type="text"
                onChange={handleChange}
                name="lastName"
                value={userData.lastName}
              />{" "}
              <br />
              <label htmlFor="">Mobile Number : </label>
              <input
                type="number"
                onChange={handleChange}
                name="phone"
                value={userData.phone}
              />{" "}
              <br />
              <label htmlFor="">Address : </label>
              <input
                type="text"
                onChange={handleChange}
                name="address"
                value={userData.address}
              />{" "}
              <br />
              <button onClick={handleAdd}>{update ? 'Update' : 'Submit' }</button>
            </div>
          </dialog>
        )}
      </div>

      <div>
        {empList.map((item) => (
          <div key={item.id}>
            <p>{item.firstName}</p>
            <p>{item.lastName}</p>
            <p>{item.phone}</p>
            <p>{item.address}</p>
            <button onClick={() => removeEmp(item.id)}>Delete</button>
            <button onClick={()=>editEmp(item,item.id)}>Edit</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Employee;
