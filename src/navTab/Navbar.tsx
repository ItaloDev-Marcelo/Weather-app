import Logo from '../assets/images/logo.svg'
import type { CommunType } from '../types/ComumReduce.type'
import DropContainer from '../components/drop/DropContainer'
import ListReadOnly from '../components/drop/Drop-items/ListReadOnly'
import ListV1 from '../components/drop/Drop-items/ListItemV1'
const Navbar = ({ SelectType, state }: CommunType) => {
  return (
    <nav className='flex flex-row justify-between items-center p-4 lg:px-45 m-2.5 lg:mt-7 lg:ml-5 '>
      <a href="/"><img src={Logo} className='w-30 lg:w-40 xl:w-45' alt='weather now logo' /></a>
      <DropContainer icon1={true} icon2={true} name='Units'>
        <li><button className='hover:bg-[#3d3b5eff]'>Switch to Imperial</button></li>
        <ListReadOnly name='Temperature' />
        <ListV1 hundleFunction={SelectType} label="Celsius (°C)"
          ReduceType='TEMPERATURE' currentValue={state.temperature}
          value="celsius" isIcon={true} />
        <ListV1 hundleFunction={SelectType} label="Fahrenheit (°F)"
          ReduceType='TEMPERATURE' currentValue={state.temperature}
          value="fahrenheit" isIcon={true} />
        <ListReadOnly name='Wind Speed' />
        <ListV1 hundleFunction={SelectType} label="km/h"
          ReduceType='WINDSPEED' currentValue={state.windSpeed} value="km/h" isIcon={true} />
        <ListV1 hundleFunction={SelectType} label="mph"
          ReduceType='WINDSPEED' currentValue={state.windSpeed} value="mph" isIcon={true} />
        <ListReadOnly name='Precipitation' />
        <ListV1 hundleFunction={SelectType} label="Millimeters (mm)"
          ReduceType='PRECIPITATION' currentValue={state.precipitation} value="mm" isIcon={true} />
        <ListV1 hundleFunction={SelectType} label="Inches (in)"
          ReduceType='PRECIPITATION' currentValue={state.precipitation} value="in" isIcon={true} />
      </DropContainer>
    </nav>
  )
}

export default Navbar