import Navbar from '../navTab/Navbar';
import Error from '../components/Error';
import Form from '../Form/Form';
import WeatherGrid from './WeatherGrid'
import { type WeatherApiResponse } from '../types/Api.type'
import { useCallback, useEffect, useReducer, useState } from 'react'
import { reduceData, initialState } from '../hook/UseReducer'
import type { TypeActionData } from '../types/Reduce.type';


export interface GeocodingApiResponse {
  results?: {
    id: number;
    name: string;
    country: string;
    latitude: number;
    longitude: number;
    timezone: string;
  }[];
}

const WeatherApp = () => {

  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)
  const [userNotFound, setUserNotFound] = useState(false)
  const [showTime, setShowTime] = useState(false)
  const [apiData, setApiData] = useState<WeatherApiResponse | null>(null);
  const [state, dispatch] = useReducer(reduceData, initialState)

  const SelectType = (type: TypeActionData, value: string) => dispatch({ type: type, payload: value })


  const SearchByName = useCallback(async (name: string) => {
    if(!name.trim()) return

    try {
      const apiPath = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${name}`
      );
      const apiResponse = await apiPath.json();

      const results = apiResponse?.results;
      if(!results || results.length === 0) {
        setShowTime(false);
        setUserNotFound(true);
        setApiData(null);
        return
      }
        setUserNotFound(false);
      


      const { latitude, longitude, country} = apiResponse.results[0];
      setCountry(country)

      const dadosDoClima = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,precipitation,wind_speed_10m,relative_humidity_2m&hourly=temperature_2m,precipitation,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum&timezone=auto`
      );


      const climaResult = await dadosDoClima.json();
        
  setShowTime(true); 
      setTimeout(() => {
  setApiData(climaResult);
}, 2500);

    
    



    } catch (err) {
      console.error(err);
      setError(true)
       setShowTime(false)
    }



  }, []
  )

  useEffect(() => {
     if (!city.trim()) {
    setApiData(null);
    setShowTime(false);
    return;
  }
    SearchByName(city)
  }, [SearchByName, city])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  const searchInput = () => setCity(search)

  const reset = () => {
    setSearch('')
    setCity('')
    setError(false)
  }


  

  return (
    <div>
      <Navbar state={state} SelectType={SelectType} />
      {error  ? <Error reset={reset} /> : <Form searchInput={searchInput} handleChange={handleChange} />}
      {userNotFound && <h2 className='text-center mt-4 font-bold  text-white lg:text-2xl'>No search result found!</h2> }
      {showTime ? <WeatherGrid state={state} SelectType={SelectType} data={apiData} city={city} country={country} /> : null}
    </div>
  )
}

export default WeatherApp