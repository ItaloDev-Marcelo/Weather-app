// import type { WeatherApiResponse } from '../../types/Api.type';
import type { BlockSt01, BlockSt02, FullBlocksProps } from '../../types/Block.St.type';
import BlockStyle01 from './BlockStyle01';
import BlockStyle02 from './BlockStyle02';
import {EmpatyBlocks}  from './EmpatyBlocks';


function isFormateData(data: unknown): data is BlockSt01 {
    if (typeof data !== "object" || data === null) return false;
  return data && "time" in data && "temperature" in data;
}

function isFormateData2(data: unknown ): data is BlockSt02 {
    if (typeof data !== "object" || data === null) return false;
  return data && "dt" in data && "max" in data;
}

const FullBlocks = ({classInLine, type, data}:FullBlocksProps) => {
   

   const SelectGridSt = (t: number) => {
       switch(t) {
            case 1:
               if(isFormateData2(data)) {
                  return <BlockStyle01 classInLine={classInLine}  Data={data} />
               }
            return null
            case 2:
               if(isFormateData(data)) {
                  return <BlockStyle02 classInLine={classInLine}  Data={data} />
               }
            return null
            case 3:
            return <EmpatyBlocks  classInLine={classInLine} />
       }
   }

   SelectGridSt(1)



  return (
    <div>
       {SelectGridSt(type)}
    </div>
  )
}

export default FullBlocks