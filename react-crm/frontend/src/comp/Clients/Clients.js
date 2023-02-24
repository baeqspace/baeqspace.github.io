import './Clients.css'

function Clients({clients}) {
    return (
        <div className='Clients'>
            <h1>Клиенты</h1>
            {clients.map((c)=>{
                return <div title={c.cart} className='client'>{c.name} {c.email} {c.prePrice}$</div>
            })}
        </div>
    )
}

export default Clients