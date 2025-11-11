import type { FormProps } from "../types/Form.type"
const Form = ({handleChange,searchInput}:FormProps) => {
  return (
    <div className='flex flex-col gap-3 m-2 items-center justify-center text-center '>
         <h1 className='font-bold my-5 text-5xl text-white md:text-3xl lg:text-4xl'>How's the <br className='md:hidden' /> sky looking <br className='md:hidden' /> today?</h1>
        <div className='flex flex-col md:flex-row gap-4 mt-5.5 mb-2.5 text-white p-2.5'>
            <input type='text' className='input w-82 md:w-100 shadow-none lg:w-110  bg-[#312f4bff] '
             onChange={handleChange} name='search' placeholder='🔍︎ Search for a place...' />
        <button className='btn shadow-none text-white border-none bg-[#4455daff]  active:bg-[#2d1c9cff] '
         onClick={searchInput}>Search</button>
        </div>
    </div>
  )
}

export default Form