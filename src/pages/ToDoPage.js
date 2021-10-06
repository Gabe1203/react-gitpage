import React, { useState, useEffect } from 'react'; 
import '../ToDoPage.css'
//import M from "materialize-css";
//import "materialize-css/dist/css/materialize.min.css";

function Todo({ todo, toggleComplete, removeTodo }) {
    return (
      <body>
      <div className="center-align">
        <div className="todo-list">
        <div className="todo">
        <div 
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
          {todo.text}
        </div>
        <button class="waves-effect waves-light btn" onClick={() => toggleComplete(todo)}>Complete</button>
        <button class="waves-effect red lighten-3 btn" onClick={() => removeTodo(todo)}>x</button>
        </div>
        
        {/* <div className="right-align">
          <button class="waves-effect waves-light btn" onClick={() => toggleComplete(todo)}>Complete</button>
          <button class="waves-effect red lighten-3 btn" onClick={() => removeTodo(todo)}>x</button>
          </div> */}
        </div>
      </div>
      
    </body>
      
    );
};

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      // <form onSubmit={handleSubmit}>
      //   <input
      //     type="text"
      //     className="filled-in"
      //     value={value}
      //     onChange={e => setValue(e.target.value)}
      //   />
      // </form>
      <div class="row">
        <form class="col s12" onSubmit={handleSubmit}>
          <div class="row">
            <div class="input-field col s12">
              <input
                type="text"
                id="new-todo"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
              <label for="new-todo">New to-do item</label>
              {/* <textarea id="textarea1" class="materialize-textarea" onSubmit={handleSubmit}></textarea>
              <label for="textarea1">New to-do item</label> */}
            </div>
          </div>
        </form>
      </div>
    );
}

const ToDoPage = () => {
    const [todos, setTodos] = useState([
        { text: "",
          isCompleted: false 
        }
      ]);

   // M.AutoInit();

    useEffect(() => {
        const fetchData = async () => {
            const results = await fetch(`/api/todos`); 
            const body = await results.json(); 
            setTodos(body);
        }
        fetchData();
    });

    const addTodo = async (text) => {
      const result = await fetch(`/api/todos/add-todo`, {
          method: 'post',
          body: JSON.stringify({"text": text,"isCompleted": false}),
          headers: { 
              'Content-Type': 'application/json',
          }
      });
      const respBody = await result.json();
      setTodos(respBody);
  }

    const toggleComplete = async (todo) => {
      const result = await fetch(`/api/todos/complete-todo`, {
        method: 'post',
        body: JSON.stringify({"text": todo.text, "isCompleted": todo.isCompleted}),
        headers: { 
            'Content-Type': 'application/json',
        }
      });
      const respBody = await result.json();
      setTodos(respBody);
    };

    const removeTodo = async (todo) => {
      const result = await fetch(`/api/todos/remove-todo`, {
        method: 'post',
        body: JSON.stringify({"text": todo.text}),
        headers: { 
            'Content-Type': 'application/json',
        }
      });
      const respBody = await result.json();
      setTodos(respBody);
    };

    return (
      <div>
        <div className="todo-list col-six tab-full">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
      // <div className="app">
      //   <form action="#">
      //     <p>
      //       <label>
      //         <input type="checkbox" />
      //         <span>Red</span>
      //       </label>
      //     </p>
      //     <p>
      //       <label>
      //         <input type="checkbox" checked="checked" />
      //         <span>Yellow</span>
      //       </label>
      //     </p>
      //     <p>
      //       <label>
      //         <input type="checkbox" class="filled-in" checked="checked" />
      //         <span>Filled in</span>
      //       </label>
      //     </p>
      //     <p>
      //       <label>
      //         <input id="indeterminate-checkbox" type="checkbox" />
      //         <span>Indeterminate Style</span>
      //       </label>
      //     </p>
      //     <p>
      //       <label>
      //         <input type="checkbox" checked="checked" disabled="disabled" />
      //         <span>Green</span>
      //       </label>
      //     </p>
      //     <p>
      //       <label>
      //         <input type="checkbox" disabled="disabled" />
      //         <span>Brown</span>
      //       </label>
      //     </p>
      //   </form>
      // </div>
    );
}

export default ToDoPage;