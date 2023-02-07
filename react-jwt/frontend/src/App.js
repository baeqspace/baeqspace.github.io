import logo from './logo.svg';
import './App.css';
import AuthPage from './comp/AuthPage/AuthPage'
import ProfilePage from './comp/ProfilePage/ProfilePage'
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {
  const [token, setToken] = useState('')
  const location = useLocation()
  const navigator = useNavigate()

  useEffect(()=> {
    console.log('token changed to ', token)
  },[token])

  useEffect(()=>{
    checkToken()
  },[location])

  const changeState = (data) => {
    setToken(data)
  }

  const checkToken = async () => {
    console.log('works')
    let result = await fetch('/auth/token').then(res => res.json())
    if (result.msg == 'success login') {
        setToken(result.user)
    } else {
        setToken('')
        if (location.pathname != '/auth') {
          navigator('/auth')
        }
    }
}

  return (
    <div className="App">
      {token != '' ? <Link className='nav-button' to='/profile'>В профиль {token}</Link> : ''}
      <Link className='nav-button' to='/auth'>Сменить профиль</Link>
      <Routes>
        <Route path='auth' element={<AuthPage change={changeState} />}></Route>
        <Route  path='profile' element={<ProfilePage change={changeState} token={token}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
