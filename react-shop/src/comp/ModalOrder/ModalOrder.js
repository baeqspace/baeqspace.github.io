import { useRef } from 'react'
import './ModalOrder.css'

function ModalOrder ({appear, orderAppear, getData}) {
    const name = useRef()
    const email = useRef()

    const handleSubmit = ()=>{
        let [price, cart] = getData()
        alert('Data sent: ' + name.current.value + ' ' + email.current.value+ ' ' + price + ' ' + cart)
    }

    return (
        <div className={'ModalOrder ' + (appear ? 'ModalActive' : '')}>
            <div onClick={()=>orderAppear(false)} className='Modal-close'></div>
            <p className='Modal-greeting'>To order your goods, you only need to fill some info...</p>
            <input ref={name} className='Modal-input' placeholder='Please type here your name'></input>
            <input ref={email} className='Modal-input' placeholder='Please type here your email'></input>
            <button onClick={handleSubmit} className='Modal-submit'>Submit order</button>
        </div>
    )
}

export default ModalOrder