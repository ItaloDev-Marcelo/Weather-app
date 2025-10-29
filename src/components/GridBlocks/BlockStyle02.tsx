import type { BlockStyle } from "../../types/Block.St.type"


const BlockStyle02 = ({Data, icon, classInLine}:BlockStyle) => {
  return (
     <div className={classInLine}>
       <div className="flex flex-row justify-between items-center gap-2">
        <div className='flex flex-row justify-between items-center px-2'>
          <h5>{hour} {dayTime} </h5>
          <img src={icon} alt=''/>
       </div>
          <p>{temp}°</p>
       </div>
     </div>
  )
}

export default BlockStyle02