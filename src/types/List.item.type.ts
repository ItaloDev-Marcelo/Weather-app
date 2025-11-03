import type { SelectType } from "./ComumReduce.type"
import type { TypeActionData } from "./Reduce.type"

export type communProps = {
    label: string,
    currentValue: string,
    value: string ,
    isIcon?: boolean,
    ReduceType: TypeActionData
}

export type bothFunction = {
    hundleFunction: SelectType,
    ChangeTitle: (title:string) => void
}

export type onlyFunction = {hundleFunction: SelectType}

export type ListV2 = communProps & bothFunction
export type ListV1 = communProps & onlyFunction

