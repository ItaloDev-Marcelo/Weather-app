import type { State } from "../hook/UseReducer"
// import type { hundleFunction } from "./hunldeFunction"
import type {TypeActionData} from "./Reduce.type"

export type SelectType = (type:TypeActionData, value: string) => void

export type CommunType = {
    SelectType: SelectType,
    state: State,
    isIcon?: boolean 
}


export type SelctType = {
    SelectType: SelectType
    state: State
}