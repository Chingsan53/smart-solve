import { useEffect, useState } from "react";

const WeatherForcast = () => {
  const [countryCode, setCountryCode] = useState("KH");
  const [wmoCode, setWmoCode] = useState(0);
  const [location, setLocation] = useState("New York");

  //function to get icon for weather
  function getWeatherIcon(wmoCode) {
    const icons = new Map([
      [[0], "☀️"],
      [[1], "🌤"],
      [[2], "⛅️"],
      [[3], "☁️"],
      [[45, 48], "🌫"],
      [[51, 56, 61, 66, 80], "🌦"],
      [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
      [[71, 73, 75, 77, 85, 86], "🌨"],
      [[95], "🌩"],
      [[96, 99], "⛈"],
    ]);
    const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
    if (!arr) return "NOT FOUND";
    return icons.get(arr);
  }

  //function to get country flag
  function convertToFlag(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  //use effect hook to fetch data
  useEffect(() => {
    // Fetch weather data
  }, []);

  return (
    <div>
      <h2>Weather Forecast</h2>
      <input
        type="text"
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
      />
      <div>{convertToFlag(countryCode)}</div>
      <input
        type="text"
        value={wmoCode}
        onChange={(e) => setWmoCode(Number(e.target.value))}
      />
      <div>{getWeatherIcon(wmoCode)}</div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div>{}</div>
    </div>
  );
};
export default WeatherForcast;
