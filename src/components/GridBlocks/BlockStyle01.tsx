
import UseGetDay from "../../hook/UseGetDay"
import type { Block01 } from "../../types/Block.St.type"
import { UseWeathercode } from "../../hook/UseWeathercode"
const BlockStyle01 = ({Data, classInLine}:Block01) => {
  return (
       <div className={classInLine}>
          <div className="flex flex-col items-center justify-center gap-1 text-white ">
        <div className="text-center flex flex-col items-center justify-center mt-2.5 md:mt-5">
          <h5>{Data && UseGetDay(Data?.dt, 1)}</h5>
          {Data && <img src={UseWeathercode(Data.weathercode)} className='w-10 my-1 md:my-1.5' alt=''/>}
       </div>

       <div className="flex flex-row justify-between gap-1.5 mt-2">
          <p className='mr-3'>{Data?.min}°</p>
          <p>{Data?.max}°</p>
       </div>
       </div>
       </div>
  )
}

export default BlockStyle01