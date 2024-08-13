import { useState } from 'react';
import axios from 'axios';

const AddTodoForm = () => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/todos/', { title })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodoForm;