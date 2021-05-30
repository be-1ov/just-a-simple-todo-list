import React from 'react'
import TodoList from './TodoList/Todo'
import Context from './context'
import NoTodos from './NoTodos'

function App() {

  const styles = {
    input: {
      padding: "6px 12px",
      background: "white",
      border: "1px solid rgba(0,0,0,0.1)",
      fontSize: "18pt"
    },
    button: {
      background: 'white',
      padding: "6px 12px",
      border: "1px solid rgba(0,0,0,0.1)",
      fontSize: '18pt',
      cursor: 'pointer'
    }
  }

  console.log("UPDATE")

  if (!localStorage.todos) {
    localStorage.todos = JSON.stringify([])
  }

  let [todos, setTodos] = React.useState(JSON.parse(localStorage.todos))

  function someNewTodo(){
    let data = document.getElementById("todoInput").value
    if (data.trim()){
      setTodos(todos.concat([{id: Date.now()*Math.random(), completed: false, title: data}]))
    }
    document.getElementById("todoInput").value = ""
    console.log(data)
  }
  
  function toggleTodo(id){
    setTodos(todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  } 

  localStorage.todos = JSON.stringify(todos)

  return (
    <Context.Provider value={{removeTodo, toggleTodo}}>
      <div className="wrapper">
        <h1>Very Simple Todo List</h1>
        {todos.length ? <TodoList todos={todos} /> : <NoTodos />}
        <span>
          <input id="todoInput" type="text" style={styles.input} />
          <input type="submit" style={styles.button} onClick={someNewTodo} value="+" />
        </span>
      </div>
    </Context.Provider>
  );
    
}

export default App;
