import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={TodoList} />
          <Route path='/add-todo' component={AddTodoForm} />
        </Switch>
    </Router>
  );
};

export default App
