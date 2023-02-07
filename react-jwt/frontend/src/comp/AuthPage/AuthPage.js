import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AuthPage({change}) {
    const navigator = useNavigate()
    const user = useRef()
    const pass = useRef()
    const ifReg = useRef()

    const handleSubmit = async () => {
        let header = new Headers()
        header.append('Content-Type', 'application/json')
        let reg = ifReg.current.checked
        let data = {
            user: user.current.value,
            pass: pass.current.value
        }
        let request = await fetch(`/auth/${reg ? 'reg' : 'login'}`, { method: 'POST', headers: header, body: JSON.stringify(data) }).then(d => d.json())
        console.log(request)
        switch (request.msg) {
            case 'error login':
            case 'error reg':
                alert('Не все поля заполнены')
                break
            case 'success reg':
                alert('Регистрация прошла успешно. Добро пожаловать!')
                break
            case 'success login':
                alert('Успешный вход')
                change(data.user)
                navigator('/profile')
                break
            case 'error reg already':
                alert('Пользователь уже зарегистрирован. Залогинтесь!')
                break
            case 'error login data':
                alert('Пользователь не найден или данные не верны.')
                break
        }
    }

    return (
        <div className='AuthPage'>
            <p className='app-header'>Lorem ipsum тебе!</p>
            <label className='check-authtype'>
                <input ref={ifReg} className="check" type='checkbox'></input>
                <div className='slide'></div>
                <div className='login'>Логин</div>
                <div className='reg'>Регистрация</div>
            </label>
            <input ref={user} className='auth-input' type='text' placeholder='Имя пользователя'></input>
            <input ref={pass} className='auth-input' type='text' placeholder='Пароль'></input>
            <button onClick={handleSubmit} className='submit'>Продолжить</button>
        </div>
    )

}

export default AuthPage