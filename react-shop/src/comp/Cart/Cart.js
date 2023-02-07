import './Cart.css'
import CartEl from '../CartEl/CartEl'
import { useEffect, useState } from 'react'

function Cart({order,appear, list, deleteEl, price, mode}) {
    return (
        <div className={`Cart ${appear ? appear : ''} ${mode ? 'CartMode' : ''}`}>
            <p className='Cart-header'>Here are the goods in your cart:</p>
            <div className='Cart-container'>
                {list.map((el, i)=>{
                    return <CartEl onClick={()=>deleteEl(i)} index={i} key={Math.random()} id={el.id} img={el.image} header={el.title} price={el.price}/>
                })}
            </div>
            <p className='Cart-total'>Total cost: {price}</p>
            <button onClick={()=>{
                if (list.length == 0) {
                    alert('Please choose some goods to order them!')
                    return
                }
                order(true)
            }} className={'Cart-order'}>Order now!</button>
        </div>
    )
}

export default Cart