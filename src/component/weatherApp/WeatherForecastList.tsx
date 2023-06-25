import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { WeatherResponse } from "./WeatherType";

function WeatherForecastList() {
  console.log('Component rendered');
  const foreCastURL =
    "https://api.weatherbit.io/v2.0/forecast/daily?postal_code=52000&country=MY&days=7&key=58e07d95820046e689e7410c74f5e526";

  const [response, setResponse] = useState<WeatherResponse | null>(() => {
    const localValue = localStorage.getItem("WeatherResponse");
    if (localValue === null) return null;

    return JSON.parse(localValue) as WeatherResponse;
  });
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    if (response === null) {
      axios
        .get(foreCastURL)
        .then((response) => {
          console.log("Get Response from api");
          setResponse(response.data as WeatherResponse);
          localStorage.setItem(
            "WeatherResponse",
            JSON.stringify(response.data)
          );
        })
        .catch((error) => setError(error as AxiosError));
    }
  }, []);

  if (error) {
    return <div>Error: {error.code}</div>;
  } else if (response) {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {response.data.map((data) => (
          <div className="col" key={data.datetime}>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`https://cdn.weatherbit.io/static/img/icons/${data.weather.icon}.png`}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{data.datetime}</h5>
                    <p className="card-text">{data.weather.description}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        {data.max_temp}°C
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="col text-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"></img>
      </div>
    );
  }
}

export default WeatherForecastList;
