import type { BlockStyle } from "../../types/Block.St.type"

const BlockStyle01 = ({Data, classInLine, icon}:BlockStyle) => {

  const ConvertData = Data.daily.time.map((data, index) => ({
    data,
    max: Data.daily.temperature_2m_max[index],
    min: Data.daily.temperature_2m_min[index],
    weathercode: Data.daily.weathercode[index]
  }))

  console.log(ConvertData)

  return (
       <div className={classInLine}>
          <div className="flex flex-col items-center justify-center gap-2 ">
        <div className="text-center flex flex-col items-center justify-center">
          <h5></h5>
          <img src={icon} alt=''/>
       </div>

       <div className="flex flex-row justify-between gap-1.5">
          <p>°</p>
          <p>°</p>
       </div>
       </div>
       </div>
  )
}

export default BlockStyle01