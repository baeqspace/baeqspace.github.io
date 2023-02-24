import './Todo.css'

function Todo({children, id, deleteTodo, handleChange}) {
    function deleteTask(e, data) {
        e.preventDefault()
        deleteTodo(data)
    }

    return (
        <label id={id} onContextMenu={e => deleteTask(e, id)} className='Todo'>
            <input onChange={(e)=>handleChange(id)} type='checkbox'></input>
            {children}
        </label>
    )
}

export default Todo