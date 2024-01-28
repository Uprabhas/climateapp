import "./current-weather.css"

const CurrentWeather = ({data})=>{
    return(
        <div className="Weather">
            <div className="top">
                <div>
                <p className="city">{data.city}</p>
                <p className="description">{data.weather[0].description}</p>
                </div>
                <img className="weather-icon" src={`icons/${data.weather[0].icon}.png`} alt="Sunny"/>
            </div>
            <div className="bottom">
                <p className="temp">{Math.round(data.main.temp)-273} °C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Detail</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">feels like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)-273}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed}m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">pressure</span>
                        <span className="parameter-value">{data.main.pressure}hPa</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;