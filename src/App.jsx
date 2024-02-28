import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    const newTodo = {
      name: todoName,
      description: todoDescription,
      status: 'Not Completed'
    };
    setTodos([...todos, newTodo]);
    setTodoName('');
    setTodoDescription('');
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const updateStatus = (index) => {
    const newTodos = [...todos];
    newTodos[index].status = newTodos[index].status === 'Not Completed' ? 'Completed' : 'Not Completed';
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed' && todo.status === 'Completed') return true;
    if (filter === 'not completed' && todo.status === 'Not Completed') return true;
    return false;
  });

  return (
    <div>
      <h1>My todo</h1>
      <div className='input'>
        <input value={todoName} onChange={e => setTodoName(e.target.value)} placeholder="Todo Name" />
        <input value={todoDescription} onChange={e => setTodoDescription(e.target.value)} placeholder="Todo Description" />
        <button onClick={addTodo}>Add Todo</button>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select></div>

      {filteredTodos.map((todo, index) => (
        //  <Row key={index}>
        //   <Col >
        //     <h2>{todo.name}</h2>
        //     <p>{todo.description}</p>
        //     <button onClick={() => updateStatus(index)}>{todo.status}</button>
        //     <button onClick={() => deleteTodo(index)}>Delete</button>
        //   </Col>
        //  </Row>
        <Card style={{ width: '18rem' }} Key={index} >
          <Card.Body>
            <Card.Title>Name : {todo.name}</Card.Title>
            <Card.Text>
              Discription : {todo.discription}
            </Card.Text>
            <Button variant="primary" onClick={() => updateStatus(index)}>Status : {todo.status} </Button>
            <Button variant="primary" onClick={() => deleteTodo(index)}>Delete </Button>
          </Card.Body>
        </Card>

      ))}
    </div>
  );
};

export default TodoApp;

