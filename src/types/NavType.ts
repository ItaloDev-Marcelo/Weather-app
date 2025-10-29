import type { State } from "../hook/UseReducer"
// import type { hundleFunction } from "./hunldeFunction"
import type {TypeActionData} from "./Reduce.type"

export type SelectType = (type:TypeActionData, value: string) => void

export type NavProps = {
    SelectType: SelectType,
    state: State,
    isIcon?: boolean 
}


export type SelctType = {
    SelectType: SelectType
    state: State
}