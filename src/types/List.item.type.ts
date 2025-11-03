import type { SelectType } from "./ComumReduce.type"
import type { TypeActionData } from "./Reduce.type"



export type ListProps = {
    hundleFunction: SelectType,
    ChangeTitle: (title:string) => void,
    label: string,
    currentValue: string,
    value: string ,
    isIcon?: boolean,
    ReduceType: TypeActionData
}

