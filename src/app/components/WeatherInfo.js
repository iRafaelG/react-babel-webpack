// import node modules
import React from "react";

const WeatherInfo = (props) => {
  return (
    <div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
      {props.temperature ? (
        <div className="card card-body">
          <p>
            Location: {props.city}, {props.country}
          </p>
          <p>
            Temperature: {props.temperature} ºC, {props.description}
          </p>
          <p>Humidity: {props.humidity}</p>
          <p>Wind speed: {props.wind_speed}</p>
        </div>
      ) : (
        <div className="card card-body">No data yet</div>
      )}
    </div>
  );
};

export default WeatherInfo;
