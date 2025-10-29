import Navbar from './navTab/Navbar';
import Error from './components/Error';
import Form from './Form/Form';
import WeatherGrid from './layout/WeatherGrid'
import {type WeatherApiResponse} from './types/Api.type'
import { useEffect, useReducer, useState } from 'react'
import {reduceData, initialState} from './hook/UseReducer'
import type { TypeActionData } from './types/Reduce.type';
function App() {

  const [city, setCity] = useState('Salvador')
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)
  const [userNotFound, setUserNotFound] = useState(false)
  const [apiData,setApiData] = useState<WeatherApiResponse[]>([]);
  const [state, dispatch] = useReducer(reduceData, initialState)

  // const [temperature, setTemperature] = useState('celsius');
  // const [windSpeed, setWindSpeed] = useState('km/h');
  // const [precipitation, setPrecipitation] = useState('mm');
  // const [weekDay,setWeekDay] = useState('—')
  
  // const SelectTemperature = (unit: string) => setTemperature(unit);
  // const SelectWindSpeed = (unit: string) => setWindSpeed(unit);
  // const SelectPrecipitation = (unit: string) => setPrecipitation(unit);
  // const SelectDay = (day: string) => setWeekDay(day);

  const SelectType = (type:TypeActionData, value: string) => dispatch({type: type, payload: value})


  async function SearchByName(name: string)  {
    try {
      const apiPath = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${name}`
      );
      const apiResponse = await apiPath.json();

      if (!apiResponse.results || apiResponse.results.length === 0 ) {
        setUserNotFound(true)
        console.log('Data not found', userNotFound)
        return;
      }



      const { latitude, longitude } = apiResponse.results[0];
      const dadosDoClima = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,precipitation,wind_speed_10m,relative_humidity_2m&hourly=temperature_2m,precipitation,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum&timezone=auto`
      );

      const climaResult = await dadosDoClima.json();
        setUserNotFound(false)
        setError(false)
        console.log('Data found', userNotFound)
        setApiData(climaResult);
    
    } catch (err) {
      console.log('page not found')
      console.error(err);
         setError(true)
    }
  }



 

  

  useEffect(() => {
    if(city) SearchByName(city)
  }, [city])


  
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
     console.log(event.target.value)
     setSearch(event.target.value)
  }

  const searchInput = () => {
    setCity(search)
  } 

  const reset = () => {
    setSearch('')
    setCity('salvador')
  }



  
  return (
    <div >
      
     {/* <Navbar
     state={state}
     SelectType={SelectType}
     
      SelectTemperature={SelectTemperature}
      SelectWindSpeed={SelectWindSpeed}
       SelectPrecipitation={SelectPrecipitation}
       temperature={temperature}
       windSpeed={windSpeed}
       precipitation={precipitation}
       /> */}

          <Navbar
     state={state}
     SelectType={SelectType}
       />
     {error || apiData === undefined  ? <Error reset={reset}/> : <Form searchInput={searchInput}  handleChange={handleChange} />}

     {userNotFound   && <h2 className='text-center mt-4 font-bold  text-white lg:text-2xl'>No search result found!</h2>}

     <WeatherGrid value={weekDay}
  hundleFunction={SelectDay} Data={apiData} />


    </div>
  )
}

export default App
