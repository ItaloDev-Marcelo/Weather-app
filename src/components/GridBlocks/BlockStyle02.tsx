import type { BlockStyle } from "../../types/Block.St.type"


const BlockStyle02 = ({Data, icon, classInLine}:BlockStyle) => {



  return (
     <div className={classInLine}>
       <div className="flex flex-row justify-between w-full  gap-2 bg-green-300">
        <div className='flex flex-row justify-between items-center bg-red-400 px-2'>
          <div>
              <img src={icon} alt=''/>
            <h5>{Data?.time} {Data && Data?.time > '12' ? 'PM' : 'AM' } </h5>
          </div>
       
        </div>
          <p>{Data?.temperature}°</p>
       </div>
     </div>
  )
}

export default BlockStyle02