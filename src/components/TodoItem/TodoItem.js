import React,{useState,useRef} from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../redux/actions';


const TodoItem = ({task}) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const dispatch = useDispatch();
    const textRef = useRef(null);

    function editItemToState(e){
        e.preventDefault();
        dispatch(updateTodo({message:textRef.current.value , id:task.id}))
       setIsUpdate(false);
        textRef.current=null;
    }
    const renderForm =()=>{
    return (
     
            <form onSubmit ={editItemToState}>
                <input type="text" defaultValue={task.task} ref ={textRef}/>
                <button type="submit">Edit</button>
            </form>
       
    )
};
const renderItem =()=>{
    return(
        <>
        <div>
            {task.task}
            <button onClick={()=>setIsUpdate(true)} >Edit</button>
            <button onClick={()=>dispatch(deleteTodo(task.id))}>Delete</button>
        </div>
        </>
    )
}
return (
    <>
      <p></p>
      <div>{isUpdate ? renderForm() : renderItem()}</div>
    </>
  );

}
export default TodoItem
