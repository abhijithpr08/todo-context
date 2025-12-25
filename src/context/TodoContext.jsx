import { Children, createContext, useEffect, useState } from "react"

export const TodoContext = createContext();

export const TodoProvider = ({ Children }) => {
    console.log("hey")
    const [todos, setTodo] = (() => {
        const storedTodo = localStorage.getItem("todos");
        return storedTodo ? JSON.parse(storedTodo) : []
    })

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify("todos"))
    },[todos])

    return <>
    <h1><i>hey </i></h1>
    </>
}