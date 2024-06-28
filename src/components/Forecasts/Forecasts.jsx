import "./Forecasts.css";
import Forecast from "../Forecast/Forecast";
import FORECASTS from "./data";

function Forecasts() {
  return (
    <div className="forecasts container forecasts__container">
      <ul className="forecasts__blocks">
        {FORECASTS.map((forecast) => (
          <Forecast
            key={forecast.city}
            name={forecast.city}
            temp={forecast.temp}
            icon={forecast.icon}
            flexBasis={forecast.flexBasis}
            backgroundColor={forecast.backgroundColor}
            hoverBackgroundColor={forecast.hoverBackgroundColor}
          />
        ))}
      </ul>
    </div>
  );
}

export default Forecasts;
