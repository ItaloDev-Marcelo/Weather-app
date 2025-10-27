
import confIcon from '../../assets/images/icon-units.svg';
import DropIcon from '../../assets/images/icon-dropdown.svg';
import type { NavProps } from '../../types/NavType';
import ListItems from './ListItems';


const Drop = ({SelectTemperature,SelectWindSpeed,SelectPrecipitation, temperature, windSpeed, precipitation}:NavProps) => {
  return (
    <div className="dropdown  text-white ">
      <div tabIndex={0} role="button" className="btn border-none mb-2 shadow-none bg-[#312f4bff] text-white"><img src={confIcon} alt='' /> Units  <img src={DropIcon} alt='' /> </div>
      <ul tabIndex={-1} className="dropdown-content relative shadow-sm left-[-7em] gap-2 menu bg-[#312f4bff]
       rounded-box z-1 w-50 p-2 ">
        <li><button className='hover:bg-[#3d3b5eff]'>Switch to Imperial</button></li>
        <li aria-readonly className='ml-1 cursor-default'>Temperature</li>
        <ListItems hundleFunction={SelectTemperature} label="Celsius (°C)" currentValue={temperature} value="celsius" />
        <ListItems hundleFunction={SelectTemperature} label="Fahrenheit (°F)" currentValue={temperature} value="fahrenheit" />
        <li aria-readonly className='ml-1 cursor-default'>Wind Speed</li>
        <ListItems hundleFunction={SelectWindSpeed} label="km/h" currentValue={windSpeed} value="km/h" />
        <ListItems hundleFunction={SelectWindSpeed} label="mph" currentValue={windSpeed} value="mph" />
        <li aria-readonly className='ml-1 cursor-default'>Precipitation</li>
        <ListItems hundleFunction={SelectPrecipitation} label="Millimeters (mm)" currentValue={precipitation} value="mm" />
        <ListItems hundleFunction={SelectPrecipitation} label="Inches (in)" currentValue={precipitation} value="in" />
      </ul>
    </div>
  )
}

export default Drop