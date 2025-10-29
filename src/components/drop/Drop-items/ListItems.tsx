import checkIcon from '../../../assets/images/icon-checkmark.svg';
import type { ListProps } from '../../../types/List.item.type';

const ListItems = ({hundleFunction, label, currentValue, value, isIcon}:ListProps ) => {
  return (
     <li><button className={currentValue === value ? 'bg-[#3d3b5eff] rounded-[5px]': ''} 
     onClick={() => hundleFunction(value)}>{label} 
     {currentValue === value && isIcon ? <img src={checkIcon} alt='' /> : null}  </button></li>
  )
}

export default ListItems