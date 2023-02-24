import './Form.css'
import {useRef} from 'react'

function Form({add, handleSelect}) {
    const input = useRef()

    const handleClick = () => {
        if (input.current.value === '') {alert('Заполните поле!');return}
        add({id: Date.now(), data: input.current.value, checked: false})
        input.current.value = ''
    }

    const handleSearch = (e) => {
        let todos = document.querySelectorAll('.Todo')
        let query = e.target.value
        for (let todo of todos) {
          if (!todo.textContent.includes(query)) {
            todo.style.display = 'none'
          } else {
            todo.style.display = 'block'
          }
        }
      }

    return (
        <div className='Form'>
            <input ref={input} placeholder='Введите задание'></input>
            <button onClick={handleClick}>Добавить</button>
            <br/>
            <select className="select-sort" onChange={(e) => handleSelect(e.target.value)}>
                <option value="alphabet">По алфавиту</option>
                <option value="completed">Сначала выполненные</option>
                <option value="notcompleted">Сначала не выполненные</option>
            </select>
            <input onChange={(e) => handleSearch(e)} className='search-bar' placeholder='Введите поисковый запрос'></input>
        </div>
    )
}

export default Form