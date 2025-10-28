import confIcon from '../../assets/images/icon-units.svg';
import DropIcon from '../../assets/images/icon-dropdown.svg';
type DropContainerProps = {children: React.ReactNode, icon1: boolean, icon2: boolean, name: string}

const DropContainer = ({children, icon1, icon2, name}:DropContainerProps) => {
  return (
     <div className="dropdown  text-white ">
      <div tabIndex={0} role="button" className="btn border-none mb-2 shadow-none bg-[#312f4bff] text-white">{icon1 && <img src={confIcon} alt='' />} {name}  {icon2 && <img src={DropIcon} alt='' />} </div>
      <ul tabIndex={-1} className="dropdown-content relative shadow-sm left-[-7em] gap-2 menu bg-[#312f4bff]
       rounded-box z-1 w-50 p-2 ">
        {children}
      </ul>
    </div>
  )
}

export default DropContainer