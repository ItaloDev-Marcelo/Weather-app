// import type { WeatherApiResponse } from "./Api.type"
 
// old


 type formateData = {
      time : string,
     temperature: number,
     weathercode: number
  }

export type BlockStyle = {
 Data: formateData  | null | undefined, 
 classInLine: string
}


// new code 

export type BlockSt01 = {
      time : string,
     temperature: number,
     weathercode: number
  }


export type BlockSt02 = {
     dt: string,
     min: number,
     max: number,
     weathercode: number
  }



export type Block01 = {
 Data?:  BlockSt02  | null | undefined, 
 classInLine: string
}


export type Block02 = {
 Data?: BlockSt01  | null | undefined, 
 classInLine: string
}




type UnicType = BlockSt01 | BlockSt02

export type FullBlocksProps = {classInLine: string, type: number, data?: UnicType | null | undefined  }