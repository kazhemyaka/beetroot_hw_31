import "./Forecast.css";
import styled from "styled-components";

const ForecastBlock = styled.li`
  background-color: ${(props) => props.$backgroundColor};
  flex-basis: ${(props) => props.$flexBasis};

  &:hover {
    background-color: ${(props) => props.$hoverBackgroundColor};
  }

  @media (max-width: 490px) {
    flex-basis: 100%;
  }
`;

function Forecast(props) {
  const DynamicIcon = props.icon;

  return (
    <ForecastBlock
      className="forecasts__block"
      $flexBasis={props.flexBasis}
      $backgroundColor={props.backgroundColor}
      $hoverBackgroundColor={props.hoverBackgroundColor}
    >
      <span className="forecasts__city">{props.city}</span>
      <div className="forecasts__temp-and-icon">
        <span className="forecasts__temp">{props.temp}</span>
        <DynamicIcon size={65} color="#fff" className="forecasts__icon" />
      </div>
    </ForecastBlock>
  );
}

export default Forecast;
