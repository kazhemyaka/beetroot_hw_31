import "./Header.css";
import { WiSunrise } from "weather-icons-react";

function Header() {
  return (
    <header className="header container footer__container">
      <h1 className="header__heading">CSS Weather Forecast</h1>
      <WiSunrise size={35} color="#fff" className="header__icon" />
    </header>
  );
}

export default Header;
