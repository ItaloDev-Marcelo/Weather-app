import type { BlockStyle } from "../../types/Block.St.type"


const BlockStyle02 = ({Data, icon, classInLine}:BlockStyle) => {

  const FormateData = Data.hourly.time.map((t, i) => ({
    time: t.slice(11,16),
    temperature: Data.hourly.temperature_2m[i],
    weathercode: Data.hourly.weathercode[i]
  }))

  console.log(FormateData)

  return (
     <div className={classInLine}>
       <div className="flex flex-row justify-between items-center gap-2">
        <div className='flex flex-row justify-between items-center px-2'>
          <h5>{}  </h5>
          <img src={icon} alt=''/>
       </div>
          <p>{}°</p>
       </div>
     </div>
  )
}

export default BlockStyle02