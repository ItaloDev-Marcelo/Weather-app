import Logo from '../assets/images/logo.svg'
import Drop from '../components/drop/Drop'
import type { NavProps } from '../types/NavType'

const Navbar = ({ SelectTemperature, SelectWindSpeed, SelectPrecipitation, temperature, windSpeed, precipitation }: NavProps) => {
  return (
    <nav className='flex flex-row justify-between items-center p-4 lg:px-45 m-2.5 lg:mt-7 lg:ml-5 '>
      <a href="/"><img src={Logo} className='w-30 lg:w-40 xl:w-45' alt='weather now logo' /></a>
      <Drop SelectTemperature={SelectTemperature}
        SelectWindSpeed={SelectWindSpeed}
        SelectPrecipitation={SelectPrecipitation}
        temperature={temperature}
        windSpeed={windSpeed}
        precipitation={precipitation} />
    </nav>
  )
}

export default Navbar