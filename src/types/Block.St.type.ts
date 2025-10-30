// import type { WeatherApiResponse } from "./Api.type"

 type formateData = {
      time : string,
     temperature: number
     weathercode: number
  }


export type BlockStyle = {
    Data: formateData  | null | undefined, 
    icon: string, classInLine: string
}