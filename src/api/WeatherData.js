import geocoding from "./Geocoding";

const { longitude, latitude } = await geocoding();

export default async function weatherdata() {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,apparent_temperature`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: Error`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}
