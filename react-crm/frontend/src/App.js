import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route} from 'react-router-dom'
import io from 'socket.io-client'
import { useEffect, useState } from 'react';
import Clients from './comp/Clients/Clients'
import Funnel from './comp/Funnel/Funnel'
import Tasks from './comp/Tasks/Tasks'

const socket = io('ws://localhost:3345')

function App() {
  const [clients, setClients] = useState([])
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
      socket.on('clients', text => setClients(text))
  })

  useEffect(()=>{
    makeInitial()
  },[])

  const makeInitial = async()=>{
    console.log('make')
    let clientData = await fetch('/api/clients').then(res => res.json())
    let tasksData = await fetch('/api/task').then(res => res.json())
    setClients(clientData)
    setTasks(tasksData)
  }

  const sendBack = async () => {
    fetch('/api/changeclients', {method: 'POST', body: JSON.stringify(clients), headers: {'Content-Type': 'application/json'}})
  }

  const changeClients = (data) => {
    setClients(data)
    sendBack()
  }

  const changeTasks = (data) => {
    setTasks(prev => [...prev, data])
  }

  return (
    <div className="App">
      <div className='nav'>
        <Link className='nav-button' to='/funnel'>Воронка</Link>
        <Link className='nav-button' to='/tasks'>Задания</Link>
        <Link className='nav-button' to='/clients'>Клиенты</Link>
      </div>
      <div className='main'>
        <Routes>
          <Route path="funnel" element={<Funnel changeClients={changeClients} clients={clients}/>}></Route>
          <Route path="tasks" element={<Tasks changeTasks={changeTasks} tasks={tasks} clients={clients} />}></Route>
          <Route path='clients' element={<Clients clients={clients}/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
