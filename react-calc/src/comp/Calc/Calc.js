import './Calc.css'
import {useState} from 'react'
import Result from '../Result/Result'
import Button from '../Button/Button'

export default function Calc() {
    let [buttons, setButtons] = useState(['C', '%', '*', '/', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '0', '.', '='])

    const [result, setResult] = useState('0')
    const handleClick = (value) => {
        switch (value) {
            case '=':
                try {
                    setResult(eval(result))
                } catch (e) {
                    alert(e)
                }
                break;
            case 'C':
                setResult('0')
                break;
            case '0':
                if (result !== '0') {
                    setResult(prev => prev += value)
                }
                break
            default:
                if (result === '0' && value !== '.') {
                    setResult(value)
                    break
                }
                setResult(prev => prev += value)
                break
        }
    }


    return (
        <div className='Calc'>
            <Result>{result}</Result>
            {buttons.map((el) => {
                return <Button data-el={el} handleClick={handleClick}>{el}</Button>
            })}
        </div>
    )
}