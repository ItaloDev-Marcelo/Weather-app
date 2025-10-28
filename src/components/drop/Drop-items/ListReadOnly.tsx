
type ListReadOnlyProps = {name:string}

const ListReadOnly = ({name}:ListReadOnlyProps) => {
  return (
      <li aria-readonly className='ml-1 cursor-default'>{name}</li>
  )
}

export default ListReadOnly