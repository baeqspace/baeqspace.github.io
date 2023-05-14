import './Result.css'

const Result = ({children, ...props}) => {
    return (
        <div {...props} className='result'>{children}</div>
    )
}

export default Result