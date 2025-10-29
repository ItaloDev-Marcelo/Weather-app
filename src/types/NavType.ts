import type { hundleFunction } from "./hunldeFunction"
import type { State} from "./Reduce.type"

export type NavProps = {
    SelectType: hundleFunction,
    state: State,
    isIcon?: boolean 
}


export type SelctType = {
    SelectType: hundleFunction,
    state: State
}