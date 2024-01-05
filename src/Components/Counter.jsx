import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increament,decreament } from '../Redux/Features/Counter/CounterSlice'
const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector( (state)=> state.counter.count )
  return (
    <div>
        <h1>Counter</h1>
        <button onClick={()=> dispatch(increament())}>Increament</button>
        <h3>count : {count}</h3>
        <button onClick={()=> dispatch(decreament())}>Decreament</button>
    </div>
  )
}

export default Counter