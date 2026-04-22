import DrizzleIcon from "../assets//images/icon-drizzle.webp";
import FogIcon from "../assets//images/icon-fog.webp";
import OvercastIcon from "../assets//images/icon-overcast.webp";
import PartlyCloudyIcon from "../assets//images/icon-partly-cloudy.webp";
import RainIcon from "../assets//images/icon-rain.webp";
import SnowIcon from "../assets//images/icon-snow.webp";
import StormIcon from "../assets//images/icon-storm.webp";
import SunnyIcon from "../assets//images/icon-sunny.webp";

export function getWeatherIcon(code) {
  const weatherIcons = {
    0: SunnyIcon,

    1: SunnyIcon,
    2: PartlyCloudyIcon,
    3: OvercastIcon,

    45: FogIcon,
    48: FogIcon,

    51: DrizzleIcon,
    53: DrizzleIcon,
    55: DrizzleIcon,
    56: DrizzleIcon,
    57: DrizzleIcon,

    61: RainIcon,
    63: RainIcon,
    65: RainIcon,
    66: RainIcon,
    67: RainIcon,

    71: SnowIcon,
    73: SnowIcon,
    75: SnowIcon,
    77: SnowIcon,

    80: RainIcon,
    81: RainIcon,
    82: RainIcon,

    85: SnowIcon,
    86: SnowIcon,

    95: StormIcon,
    96: StormIcon,
    99: StormIcon,
  };

  return weatherIcons[code];
}

export function roundUpValue(value) {
  const roundeValue = Math.round(value);
  return roundeValue;
}

export function formatDay(day) {
  const formatedDay = new Date(day).toLocaleDateString("en-US", {
    weekday: "long",
  });
  return formatedDay;
}
