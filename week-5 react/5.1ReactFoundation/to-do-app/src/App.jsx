import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
  {
    title: "Get ready",
    description: "Wake up at 7am",
    completed: false
  },
  {
    title: "Full stack course",
    description: "Start course at 8am",
    completed: false
  }
  ]);

  function addTodo(){
    // ... will spread all the original values
    //eg: initial values of todos [1, 2]
    // [...todos, 3] will give => [1, 2, 3]
    setTodos([...todos, {
      title: "newTodo",
      description: "desc of new todo"
    }])
  }

  return (
     <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(function(todo){
        return(
          <Todo title={todo.title} description={todo.description}/>
        )
      })}
     </div>
  );
}

//Component
function Todo(props){
  return(
  <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
  );
}

export default App
