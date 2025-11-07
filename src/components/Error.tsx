import ReloadImage from '../assets/images/icon-retry.svg';
import ErrorImg from '../assets/images/icon-error.svg'
type ErrorProps = {reset: () => void}

const Error = ({reset}:ErrorProps) => {
  return (
    <div className='flex flex-col gap-5 items-center mt-15 text-white'>
        <figure className='flex items-center justify-center'>
            <img src={ErrorImg} alt='' className='w-10' />
        </figure>
        <h1 className='text-4xl font-bold'>Something went wrong</h1>
        <p className='w-100 text-center'>We couldn't connect to the server(API error).Please try 
            again in a few moments.
        </p>
        <button onClick={reset} className='btn border-none outline-none text-white flex gap gap-2 bg-[#312f4bff]'><img src={ReloadImage} alt='' />Retry</button>
    </div>
  )
}

export default Error