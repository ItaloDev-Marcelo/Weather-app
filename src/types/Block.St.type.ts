
// new code 

// import type { State } from "../hook/UseReducer"

export type BlockSt01 = {
      time : string,
     temperature: number | string,
     weathercode: number
  }


export type BlockSt02 = {
     dt: string,
     min: number | string,
     max: number | string,
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