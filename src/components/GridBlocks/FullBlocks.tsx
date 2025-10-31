// import type { WeatherApiResponse } from '../../types/Api.type';
import BlockStyle01 from './BlockStyle01';
import BlockStyle02 from './BlockStyle02';
import {EmpatyBlocks}  from './EmpatyBlocks';


 type formateData = {
      time : string,
     temperature: number,
     weathercode: number
  }


  type formateData2 = {
     dt: string,
     min: number,
     max: number,
     weathercode: number
  }


  type UnicType = formateData | formateData2

  type FullBlocksProps = {classInLine: string, type: number, data?: UnicType | null | undefined  }

const FullBlocks = ({classInLine, type, data}:FullBlocksProps) => {
   

   const SelectGridSt = (t: number) => {
       switch(t) {
            case 1:
            return <BlockStyle01 classInLine={classInLine}  Data={data} />
             case 2:
            return <BlockStyle02 classInLine={classInLine}  Data={data}  />
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