import { useSelector } from "react-redux";
import AddTodo from "./components/AddTodo.js/AddTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const taskObj = useSelector((state)=>state.todos.data);
  return (
   <div style={{ textAlign:"center"}}>
   <h1>Todo List</h1>
   <h3>Total Items in List : {taskObj.length}</h3>
   <AddTodo/>
   <TodoList/>
   </div>
  );
}
export default App;
