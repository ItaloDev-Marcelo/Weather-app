import type { SelectType } from "./ComumReduce.type"
import type { TypeActionData } from "./Reduce.type"


export type ListProps = {
    hundleFunction: SelectType,
    label: string,
    currentValue: string,
    value: string,
    isIcon?: boolean,
    ReduceType: TypeActionData
}

