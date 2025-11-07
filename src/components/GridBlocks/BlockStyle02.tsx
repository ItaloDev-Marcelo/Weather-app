import type { Block02} from "../../types/Block.St.type"
import { UseWeathercode } from "../../hook/UseWeathercode"

const BlockStyle02 = ({Data, classInLine}:Block02) => {

  return (
     <div className={classInLine}>
       <div className="flex flex-row text-white justify-between w-full  gap-2 px-2">
        <div className='flex flex-row justify-between items-center  px-2'>
          <div className="flex flex-row">
            {
              Data && <figure><img src={UseWeathercode(Data.weathercode)} alt='' className='w-7 mr-1'/></figure>
            }
            <h5>{Data?.time} {Data && Data?.time > '12' ? 'PM' : 'AM' } </h5>
          </div>
       
        </div>
          <p className='text-[1.1rem]'>{Data?.temperature}°</p>
       </div>
     </div>
  )
}

export default BlockStyle02