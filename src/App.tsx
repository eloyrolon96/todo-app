import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [goClicks, setGoClicks] = useState<number>(0);

  const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();

      if (todo) {
          setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
          setTodo("");
      }

      setGoClicks(prevGoClicks => prevGoClicks + 1);
      
     
  };

  console.log(todo);
  console.log(todos);

  return (
      <div className="App">
          <span className="heading">Taskify</span>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} goClicks={goClicks}></InputField>
          <TodoList todos={todos} setTodos={setTodos} ></TodoList>
      </div>
  );

}

export default App;