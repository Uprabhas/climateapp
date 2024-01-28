import "./forecast-weather.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const week_day = [
  "Monday",
  "tuesday",
  "wedensday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const Forecast = ({ data }) => {
  const today = new Date().getDay();
  const forecastdays = week_day
    .slice(today, week_day.length)
    .concat(week_day.slice(0, today));
  console.log(forecastdays);
  return (
    <>
      <label className="title">Daliy</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daliy-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label className="day m-2">{forecastdays[idx]}</label>
                  <babel className="description">
                    {item.weather[0].description}
                  </babel>
                  <label className="min-max">
                    {Math.round(item.main.temp_min) - 273} °C/
                    {Math.round(item.main.temp_max) - 273} °C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
