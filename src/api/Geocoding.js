const city = "quito";
export default async function geocoding() {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
  );

  if (!res.ok) {
    throw new Error(`Geocoding request failed: ${res.status}`);
  }

  const data = await res.json();

  if (!data.results || data.results.length === 0) {
    throw new Error(`City ${city} not found`);
  }

  const { longitude, latitude, name, country } = data.results[0];

  return { longitude, latitude, name, country };
}
