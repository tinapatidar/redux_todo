import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../../redux/actions';


const AddTodo = () => {
    const[tasks,setTasks] = useState("");
    const dispatch = useDispatch();
    function handleInputChange(e){
        setTasks(e.target.value);
        console.log(tasks);
    }
    function handleFormSubmit(e){
        e.preventDefault();
        dispatch(addTodo({task:tasks , id:tasks.id}));
        e.target.userInput.value="";
        console.log(tasks);
    }
    return (
        <div>
        <form onSubmit={handleFormSubmit}>
            <input  type="text" name="userInput"
            onChange ={(e)=>{handleInputChange(e)}}
            />
            <button type ='submit' >ADD</button>
        </form>            
        </div>
    )
}
export default AddTodo
