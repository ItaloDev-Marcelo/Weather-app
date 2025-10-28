type FullBlocksProps = {classInLine: string, type: number}
import BlockStyle01 from './BlockStyle01';
import BlockStyle02 from './BlockStyle02';
import EmpathyBlocks from './EmpatyBlocks';




const FullBlocks = ({classInLine, type}:FullBlocksProps) => {

    console.log(type)

   const SelectGridSt = (type) => {
       switch(type) {
            case 1:
            return <BlockStyle01 classInLine={classInLine} day={day} icon={icon} max={max} min={min} />
            break
             case 2:
            return <BlockStyle02 classInLine={classInLine} hour={hour} dayTime={dayTime} icon={icon} temp={temp}  />
            default:
              return <EmpathyBlocks classInLine={classInLine} />
            break  
       }
   }

   SelectGridSt(1)



  return (
    <div>

    </div>
  )
}

export default FullBlocks