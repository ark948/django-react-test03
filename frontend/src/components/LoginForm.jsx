import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api-token-auth/', { username, password })
            .then(res => {
                localStorage.setItem('token', res.data.token);
            })
            .catch(error => {
                console.log("Authentication error: " , error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type='submit'>Login</button>
        </form>
    );
};

export default LoginForm