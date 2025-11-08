import type { WeatherApiResponse } from "./Api.type"
import type {State, TypeActionData} from "./Reduce.type"

export type SelectType = (type:TypeActionData, value: string) => void

export type CommunType = {
    SelectType: SelectType,
    country?:string,
    city?:string,
    state: State,
    isIcon?: boolean 
    data?: WeatherApiResponse | null | undefined
}


export type SelctType = {
    SelectType: SelectType
    state: State
}