import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./ActionTypes"

export const addTodo = (message)=>({
    type: ADD_TODO,
    message
});

export const updateTodo = ({message, id})=>({
type : UPDATE_TODO,
message,
id,
});

export const deleteTodo = (id)=>({
    type :DELETE_TODO,
    id
});