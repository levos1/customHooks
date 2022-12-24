import { useReducer ,useEffect} from "react"
import { todoReducer } from "./todoReducer"

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo= () =>{

    const [todo, dispatchTodo] = useReducer(todoReducer, [],init)
    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todo))
        
    }, [todo])
    
    const handleNewTodo = (todo) =>{
        const action = {
            type: "[TODO]: Add Todo",
            payLoad: todo,
        }
        
        dispatchTodo(action);
    }
    const handleDeleteTodo = (id)=>{
        const action = {
            type: "[TODO] Remove Todo",
            payLoad: id,
        }
        dispatchTodo(action)
    }
    const handleToggleTodo = ( id) =>{
        dispatchTodo( {
            type: "[TODO] Toggle Todo",
            payLoad: id,
        })
        //dispatchTodo(action)
    }

    return {
        todo,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todoCount:todo.length,
        pendingTodos:(todo.filter(todos =>todos.done===false).length)

    }


}