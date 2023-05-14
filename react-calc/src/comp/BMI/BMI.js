import './BMI.css'
import Result from '../Result/Result'
import Button from '../Button/Button'
import { useState } from 'react'

export default function BMI() {
    let [buttons, setButtons] = useState(['7', '8', '9', 'C', '4', '5', '6', '+', '1', '2', '3', '0', '.', '='])

    const [height, setHeight] = useState(170)
    const [mass, setMass] = useState(60)
    const [currentField, setCurrentField] = useState('height')

    const setColor = (elem) => {
        document.querySelectorAll('.result').forEach(el => el.style.color = '')
        elem.style.color = 'yellow'
    }
    
    const handleClick = (value) => {
        let current;
        let currentSetter;
        if (currentField === 'height') {
            current = height
            currentSetter = setHeight
        } else {
            current = mass
            currentSetter = setMass
        }
        switch (value) {
            case '=':
                try {
                    alert(Math.round(Number(mass) / ((Number(height) / 100) ** 2)))
                } catch (e) {
                    alert(e)
                }
                break;
            case 'C':
                currentSetter('0')
                break;
            case '0':
                if (current !== '0') {
                    currentSetter(prev => prev += value)
                }
                break
            default:
                if (current === '0' && value !== '.') {
                    currentSetter(value)
                    break
                }
                currentSetter(prev => prev += value)
                break
        }
    }


    return (
        <div className='BMI'>
            <Result style={{color: 'yellow'}} onClick={(e)=>{setCurrentField(e.target.dataset.type); setColor(e.target)}} data-type='height'>Рост {height}</Result>
            <Result onClick={(e)=>{setCurrentField(e.target.dataset.type); setColor(e.target)}} data-type='mass'>Вес {mass}</Result>
            {buttons.map((el) => {
                return <Button handleClick={handleClick} data-el={el}>{el}</Button>
            })}
        </div>
    )
}