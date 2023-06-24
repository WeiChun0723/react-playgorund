import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { WeatherResponse } from "./WeatherType";


function WeatherForecastList() {
  const foreCastURL =
    "https://api.weatherbit.io/v2.0/forecast/daily?postal_code=52000&country=MY&days=7&key=58e07d95820046e689e7410c74f5e526";

  const [response, setResponse] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    axios
      .get(foreCastURL)
      .then((response) => setResponse(response.data as WeatherResponse))
      .catch((error) => setError(error as AxiosError));
  }, []);

  if (error) {
    return <div>Error: {error.code}</div>;
  } else if (response) {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {response.data.map((data) => (
          <div className="col">
            <div className="card h-100">
              <img
                src={`https://cdn.weatherbit.io/static/img/icons/${data.weather.icon}.png`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{data.datetime}</h5>
                <p className="card-text">{data.weather.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <div className="col text-center"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"></img></div>;
  }
}

export default WeatherForecastList;
