export interface WeatherApiResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: WeatherCurrentUnits;
  current: WeatherCurrent;
  hourly_units: WeatherHourlyUnits;
  hourly: WeatherHourly;
  daily_units: WeatherDailyUnits;
  daily: WeatherDaily;
}

export interface WeatherCurrentUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  apparent_temperature: string;
  precipitation: string;
  wind_speed_10m: string;
  relative_humidity_2m: string;
}

export interface WeatherCurrent {
  time: string; // ISO 8601
  interval: number; // seconds
  temperature_2m: number; // °C
  apparent_temperature: number; // °C
  precipitation: number; // mm
  wind_speed_10m: number; // km/h
  relative_humidity_2m: number; // %
}

export interface WeatherHourlyUnits {
  time: string;
  temperature_2m: string;
  precipitation: string;
  weathercode: string;
}

export interface WeatherHourly {
  time: string[]; // ISO 8601 timestamps
  temperature_2m: number[];
  precipitation: number[];
  weathercode: number[]; // WMO weather codes
}

export interface WeatherDailyUnits {
  time: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  weathercode: string;
  precipitation_sum: string;
}

export interface WeatherDaily {
  time: string[]; // YYYY-MM-DD
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weathercode: number[];
  precipitation_sum: number[];
}
