import type { BlockStyle } from "../../types/Block.St.type"

const BlockStyle01 = ({Data, classInLine, icon}:BlockStyle) => {
  return (
       <div className={classInLine}>
          <div className="flex flex-col items-center justify-center gap-2 ">
        <div className="text-center flex flex-col items-center justify-center">
          <h5>{day}</h5>
          <img src={icon} alt=''/>
       </div>

       <div className="flex flex-row justify-between gap-1.5">
          <p>{max}°</p>
          <p>{min}°</p>
       </div>
       </div>
       </div>
  )
}

export default BlockStyle01