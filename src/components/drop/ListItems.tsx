import checkIcon from '../../assets/images/icon-checkmark.svg'

type ListProps = {
    hundleFunction: (unit: string) => void,
    label: string,
    currentValue: string,
    value: string
}


const ListItems = ({hundleFunction, label, currentValue, value}:ListProps ) => {
  return (
     <li><button className={currentValue === value ? 'bg-[#3d3b5eff] rounded-[5px]': ''} onClick={() => hundleFunction(value)}>{label} 
     {currentValue === value && <img src={checkIcon} alt='' />}  </button></li>
  )
}

export default ListItems