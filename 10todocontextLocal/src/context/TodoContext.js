import { createContext, useContext } from "react";

export const TodoContext = React.createContext({
    todos: [
        {
            id: 1,
            title: "Some msg",
            status: false
        }
    ],
    addTodo: (title) => { },
    updateTodo: (id, title) => { },
    deleteTodo: (id) => { },
    toggleStatus: (id) => {}
})

export const useTodo = () => 
{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider 