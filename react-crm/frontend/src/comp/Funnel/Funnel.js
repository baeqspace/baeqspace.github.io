import { useEffect } from 'react'
import './Funnel.css'

function Funnel({clients, changeClients}) {

    const handleFunnelClick = (el, isFrwd) => {
        let index = clients.indexOf(el)
        let newClients = [...clients]
        let stage = newClients[index].stage
        if ((stage == 1 && !isFrwd) || (stage == 5 && isFrwd)) return
        newClients[index].stage += isFrwd ? 1 : -1
        changeClients(newClients)
    }

    const filterClients = (col) => {
        return clients.filter(el => el.stage == col).map((el)=>{
            return <div onContextMenu={(e) => {e.preventDefault();handleFunnelClick(el, false)}} onClick={() => handleFunnelClick(el,true)} className='funnel-client'>{el.name} {el.email}</div>
        })
    }

    return (
        <div className='Funnel'>
            <h1>Воронка</h1>
            <div className='column-container'>
                <div className='column'>
                    <p className='column-header'>Клиент собрал корзину</p>
                    <div className='column-content'>{filterClients(1)}</div>
                </div>
                <div className='column'>
                    <p className='column-header'>Заказ оформлен</p>
                    <div className='column-content'>{filterClients(2)}</div>
                </div>
                <div className='column'>
                    <p className='column-header'>Согласование транспортировки</p>
                    <div className='column-content'>{filterClients(3)}</div>
                </div>
                <div className='column'>
                    <p className='column-header'>Покупатель получил заказ</p>
                    <div className='column-content'>{filterClients(4)}</div>
                </div>
                <div className='column'>
                    <p className='column-header'>Заказ закрыт</p>
                    <div className='column-content'>{filterClients(5)}</div>
                </div>
            </div>
        </div>
    )
}

export default Funnel