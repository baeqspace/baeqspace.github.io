import './Weather.css'

export default function Weather({weather}) {
    return (
        <>
            <div className='synced'>Синхронизировано {weather.syncDay}</div>
            <div className='temp'>{weather.temp}°</div>
            <div className='temp-feel'>Ощущается как {weather.tempFeel}°</div>
            <div className='condition'>{weather.condition}</div>
            <div className='wind'>Ветер {weather.wind}м/с</div>
        </>
    )
}