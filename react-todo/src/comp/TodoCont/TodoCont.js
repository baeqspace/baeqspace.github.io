import './TodoCont.css'
import Todo from '../Todo/Todo'

function TodoCont({todos, deleteTodo, handleChange}) {
    return (
        <div className='TodoCont'>
            {todos.map((el) => {
                return <Todo key={el.id} handleChange={handleChange} deleteTodo={deleteTodo} id={el.id}>{el.data}</Todo>
            })}
        </div>
    )
}

export default TodoCont