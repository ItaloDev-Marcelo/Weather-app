import checkIcon from '../../../assets/images/icon-checkmark.svg';
import type {ListV2 } from '../../../types/List.item.type';
const ListItem2 = ({hundleFunction, label, currentValue, value, isIcon,
  ReduceType, ChangeTitle
}:ListV2 ) => {
    
    const handleClick = (): void => {
        hundleFunction(ReduceType, value);
        ChangeTitle(label);
    }

  return (
     <li ><button className={currentValue === value ? 'bg-[#3d3b5eff] rounded-[5px]': ''} 
     onClick={handleClick}>{label} 
     {currentValue === value && isIcon ? <img src={checkIcon} alt='' />
      : null}  </button></li>
  )
}

export default ListItem2