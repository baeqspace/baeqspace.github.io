import './Button.css'

const Button = ({children, handleClick, ...props}) => {
    return (
        <div {...props} className='button' onClick={(e)=>handleClick(e.target.textContent)}>{children}</div>
    )
}

export default Button