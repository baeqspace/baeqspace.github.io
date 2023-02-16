import './Clients.css'

function Clients({clients}) {
    return (
        <div className='Clients'>
            <h1>Клиенты</h1>
            {clients.map((c)=>{
                return <div className='client'>{c.name} {c.email}</div>
            })}
        </div>
    )
}

export default Clients