import { useRef } from 'react'
import './ModalOrder.css'

function ModalOrder ({appear, orderAppear, getData}) {
    const name = useRef()
    const email = useRef()

    const handleSubmit = ()=>{
        let [price, cart] = getData()
        let data = {
            name: name.current.value,
            email: email.current.value,
            price: price,
            cart: cart
        }
        console.log(data)
        fetch('http://localhost:3345/api/clients', {method:'POST', body: JSON.stringify(data),  headers: {'Content-Type': 'application/json'}})
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