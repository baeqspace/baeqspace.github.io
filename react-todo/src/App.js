import logo from './logo.svg';
import './App.css';
import Form from './comp/Form/Form'
import TodoCont from './comp/TodoCont/TodoCont'
import {useState} from 'react'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (data) => {
    setTodos(prev => [...prev, data])
  }

  const deleteTodo = (id) => {
    let newTodos = todos.filter((el) => {
      return el.id !== id
    })
    setTodos(newTodos)
  }

  const handleChange = (id) => {
    let newTodos = todos.map((el) => {
      if (el.id === id) {
        el.checked = !el.checked
      }
      return el
    })
    console.log(newTodos)
    setTodos(newTodos)
  }

  function compareComp(a,b) {
    if (a.checked) {
      return -1
    }
    if (b.checked) {
      return 1
    }
    return 0
  }

  function compareNotComp(a,b) {
    if (b.checked) {
      return -1
    }
    if (a.checked) {
      return 1
    }
    return 0
  }

  const handleSelect = (data) => {
    console.log(data)
    switch (data) {
      case 'alphabet':
        setTodos([...todos].sort((a,b) => a['data'].localeCompare(b['data'])))
        console.log('sorted')
        break;
      case 'completed':
        setTodos([...todos].sort(compareComp))
        break;
      case 'notcompleted':
        setTodos([...todos].sort(compareNotComp))
        break;
    }
  }

  

  return (
    <div className="App">
      <h1>Let your tasks be done!</h1>
      <Form add={addTodo} handleSelect={handleSelect}/>
      <TodoCont handleChange={handleChange} deleteTodo={deleteTodo} todos={todos}/>
    </div>
  );
}

export default App;
