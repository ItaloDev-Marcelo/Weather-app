
import { selectWeatherIcon } from "../data/WeatherIcons"


  type formateData2 = {
     dt: string,
     min: number,
     max: number,
     weathercode: number
  }

  type PropsData2 = {classInLine: string, Data?:  formateData2 | null | undefined  }

const BlockStyle01 = ({Data, classInLine}:PropsData2) => {


  return (
       <div className={classInLine}>
          <div className="flex flex-col items-center justify-center gap-1 text-white ">
        <div className="text-center flex flex-col items-center justify-center">
          <h5></h5>
          {Data && <img src={selectWeatherIcon(Data.weathercode)} className='w-10' alt=''/>}
       </div>

       <div className="flex flex-row justify-between gap-1.5 mt-4">
          <p>{Data?.min}°</p>
          <p>{Data?.max}°</p>
       </div>
       </div>
       </div>
  )
}

export default BlockStyle01