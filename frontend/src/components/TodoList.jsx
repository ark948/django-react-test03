import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/todos/')
            .then(res => {
                setTodos(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.title}
                    {/* Add buttons for edit and delete operations here */}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;