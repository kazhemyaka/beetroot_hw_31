import "./Forecasts.css";
import Forecast from "../Forecast/Forecast";
import FORECASTS from "./data";

function Forecasts() {
  return (
    <div className="forecasts container forecasts__container">
      <ul className="forecasts__blocks">
        {FORECASTS.map((forecast) => (
          <Forecast key={forecast.city} {...forecast} />
        ))}
      </ul>
    </div>
  );
}

export default Forecasts;
