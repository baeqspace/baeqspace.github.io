import {useState, useEffect} from 'react'

function ProfilePage ({change, token}) {
    return (
        <div className='ProfilePage'>
            <h1>Profile {token}</h1>
            {!token ? <p>Вход не выполнен</p> : <p>Вход выполнен</p>}
        </div>
    )
}

export default ProfilePage