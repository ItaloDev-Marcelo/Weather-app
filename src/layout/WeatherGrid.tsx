import {PulseLoader }from 'react-spinners'
const WeatherGrid = () => {
  return (
    <section className='flex flex-col lg:flex-row items-start md:items-center p-4 lg:p-10 justify-center'>
           <div className='flex flex-col  gap-2.5 tb-gap-3 lg:gap-5'>
              <div className='glassEffect  w-[100%] h-50 tb:h-55 rounded-2xl'>
                <div className='flex flex-col items-center justify-center mt-23'>
                  <PulseLoader size={10} color='#fff' />
                   <p className='text-white text-[1.2em] mt-2'>Loading...</p>
                </div>
                
              </div>
              <div className='grid grid-cols-2 md:auto-cols-max md:grid-flow-col  gap-2   grid-row-2 lg:grid-cols-4 lg:gap-5 mt-2.5'>
                <div className='  glassEffect  w-40 xl:w-52 md:w-45 lg:w-39 h-25  rounded-2xl glassEffect p-2.5 text-white '>
                  <h3>Feels Like</h3> <br />
                  <p>—</p>
                  <img src='' alt='' />
                </div>
                <div className='  glassEffect  w-40 xl:w-52 md:w-45 lg:w-39 h-25 rounded-2xl glassEffect p-2.5 text-white '>
                   <h3>Humidity</h3> <br />
                  <p>—</p>
                  <img src='' alt='' />
                </div>
                <div className='  glassEffect  w-40 xl:w-52 md:w-45 lg:w-39 h-25 rounded-2xl glassEffect p-2.5 text-white '>
                   <h3>Wind</h3> <br />
                   <p>—</p>
                  <img src='' alt='' />
                </div>
                <div className='  glassEffect  w-40 xl:w-52 md:w-45 lg:w-39 h-25 rounded-2xl glassEffect p-2.5 text-white '>
                   <h3>Precipitation</h3> <br />
                   <p>—</p>
                  <img src='' alt='' />
                </div>
              </div>

               <h4 className='text-white font-bold'>Daily forecast</h4>

               <div className='grid grid-cols-3 md:grid-cols-7  grid-rows-3 lg:grid-cols-7 lg:grid-rows-1 gap-3 lg:gap-2.5'>
                <div className='  glassEffect  w-24 xl:w-29 h-35 md:h-40  rounded-2xl glassEffect '></div>
                <div className='  glassEffect  w-24 xl:w-29 h-35 md:h-40  rounded-2xl glassEffect '></div>
                <div className='  glassEffect  w-24 xl:w-29 h-35 md:h-40  rounded-2xl glassEffect '></div>
                <div className='  glassEffect  w-24 xl:w-29 h-35 md:h-40  rounded-2xl glassEffect '></div>
                 <div className='  glassEffect  w-24 xl:w-29 h-35  md:h-40 rounded-2xl glassEffect '></div>
                <div className='  glassEffect  w-24 xl:w-29 h-35 md:h-40  rounded-2xl glassEffect '></div>
                <div className='  glassEffect  w-24 xl:w-29 h-35 md:h-40  rounded-2xl glassEffect '></div>
              </div>
           </div>
           <div className='glassEffect tb:w-[81.5%] w-[100%] tb:mt-[-35%]  mt-3 md:mt-[-40%]  
           lg:mt-3 lg:ml-5  tb:h-100 lg:w-[25%]  h-120 lg:h-144 lg:mb-1 rounded-2xl'>
           </div>
    </section>
  )
}

export default WeatherGrid