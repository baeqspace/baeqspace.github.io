import { useState, useRef } from 'react'
import './Tasks.css'

function Tasks({clients, changeTasks, tasks}) {
    const action = useRef()
    const person = useRef()
    const date = useRef()
    const time = useRef()
    const reason = useRef()
    const importance = useRef()

    const handleClick = () => {
        let data = [importance, action, person, date, time, reason]
        let total = ''
        for (let d of data) {
            total += ' ' + d.current.value
        }
        changeTasks(total)
        fetch('/api/task', {method: 'POST', body: total, headers: {'Content-Type': 'text/plain'}})
    }

    return (
        <div className='Tasks'>
            <h1>Задания</h1>
            <select ref={action} className='task-action'>
                <option>Встретиться с</option>
                <option>Позвонить</option>
            </select>
            <select ref={person}>
                {clients.map((cl) => {
                    return <option>{cl.name}</option>
                })}
            </select>
            <input ref={date} type='date'></input>
            <input ref={time} type='time'></input>
            <input ref={reason} placeholder='Цель...'></input>
            <select ref={importance}>
                <option>Срочно</option>
                <option>Очень важно</option>
                <option>Важно</option>
            </select>
            <button onClick={handleClick}>Добавить</button>
            <div className='Tasks-container'>
                {tasks.map((t)=>{
                    return <div className='task'>{t}</div>
                })}
            </div>
        </div>
    )
}

export default Tasks