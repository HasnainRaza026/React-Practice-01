import { useEffect } from "react";
import { convertToFlag, getDayName, getWeatherIcon } from "../helper";

export function useFetch(
  location,
  callbackLocation,
  callbackWeather,
  callbackLoader
) {
  useEffect(() => {
    if (!location || location.length < 2) {
      callbackLocation(null);
      callbackWeather(null);
      return;
    }

    async function onFetch() {
      callbackLoader(true);
      try {
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
        );
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
          throw new Error("Location not found");
        }
        const { latitude, longitude, timezone, name, country_code } =
          geoData.results[0];
        callbackLocation([name, convertToFlag(country_code)]);

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
        );
        const weatherData = await weatherRes.json();

        let newWeather = [];
        Array.from({ length: 7 }, (_, i) => {
          newWeather = [
            ...newWeather,
            {
              temp_max: weatherData.daily.temperature_2m_max[i],
              temp_min: weatherData.daily.temperature_2m_min[i],
              day: getDayName(weatherData.daily.time[i]),
              icon: getWeatherIcon(weatherData.daily.weathercode[i]),
            },
          ];
          return i;
        });
        callbackWeather(newWeather);
      } catch (err) {
        console.error(err);
      } finally {
        callbackLoader(false);
      }
    }

    onFetch();
  }, [location, callbackLocation, callbackWeather]);
}
