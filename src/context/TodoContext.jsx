import { Children, createContext, useEffect, useState } from "react"

export const TodoContext = createContext();

export const TodoProvider = ({ Children }) => {
    const [todos, setTodo] = (() => {
        const storedTodo = localStorage.getItem("todos");
        return storedTodo ? JSON.parse(storedTodo) : []
    })
}