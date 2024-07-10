import { createContext,useContext } from "react";

export const TodoContext = createContext({// putting default values
    todos: [
        {
            id:1,
            todo:" Todo msg",
            completed: false,
        }
    ],
    // we didn't define here the functionality of the function insead we defines it in App.jsx or other
    addTodo:(todo) => {},
    updateTodo:(id,todo) => {},
    deleteTodo:(id) => {},
    toggleComplete:(id) => {}
})

// creating custom hooks. By using you can access all the TodoContext elements
export const useTodo= () => {
    return useContext(TodoContext)
}


export const TodoProvider = TodoContext.Provider