type FullBlocksProps = {classInLine: string, type: number,data: WeatherApiResponse }
import type { WeatherApiResponse } from '../../types/Api.type';
import BlockStyle01 from './BlockStyle01';
import BlockStyle02 from './BlockStyle02';
import EmpatyBlocks  from './EmpatyBlocks';


const FullBlocks = ({classInLine, type, data}:FullBlocksProps) => {

    console.log(type)

   const SelectGridSt = (t: number) => {
       switch(t) {
            case 1:
            return <BlockStyle01 classInLine={classInLine} Data={data} />
            break
             case 2:
            return <BlockStyle02 classInLine={classInLine} Data={data}  />
            default:
              return <EmpatyBlocks  classInLine={classInLine} />
            break  
       }
   }

   SelectGridSt(1)



  return (
    <div>
       { SelectGridSt(type, data)}
    </div>
  )
}

export default FullBlocks