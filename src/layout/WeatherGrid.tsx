import { PulseLoader } from 'react-spinners'
import DropContainer from '../components/drop/DropContainer';
import ListV2 from '../components/drop/Drop-items/ListItemV2';
import {UseWeathercode} from '../hook/UseWeathercode'
import FullBlocks from '../components/GridBlocks/FullBlocks';
import type { CommunType } from '../types/ComumReduce.type';
import { useState } from 'react';
import UseGetDay from '../hook/UseGetDay';
const WeatherGrid = ({SelectType, state, data, country, city}:CommunType) => {


  const UseTemp = (valor : number, name: string) => {
    const result1 = valor;
    const result2 =  (valor * 9) / 5 + 32
      return name === 'celsius' ? result1.toFixed(0) : result2.toFixed(0)
  }
  
    const today = new Date().toISOString().split('T')[0]; 
    const currentDate = new Date()
    const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
    ]

  const selectMoth = (month:number) => months[month]
  const [title, setTitle] = useState('Monday')

    
    const FormateData = data && data?.hourly?.time.map((t, i) => ({
    day: t.slice(0,10),
    time: t.slice(11,13),
    temperature: UseTemp(data.hourly.temperature_2m[i],state.temperature),
    weathercode: data.hourly.weathercode[i]
  }))

    const ConvertData = data && data?.daily?.time.map((dt, index) => ({
    dt,
    max: Number(UseTemp(data.daily.temperature_2m_max[index],state.temperature)),
    min: Number(UseTemp(data.daily.temperature_2m_min[index],state.temperature)),
    weathercode: data.daily.weathercode[index]
  }))

  const UseWind = (valor : number,name: string) => {
    const result1 = valor;
    const result2 = valor /1.609
    return name === 'km/h' ? Number(result1.toFixed(2)) : Number(result2.toFixed(2))
  }
  

   const UsePrec = (valor : number,name: string) => {
    const result1 = valor 
    const result2 = valor / 25.4
    return  name === 'mm' ? Number(result1.toFixed(1)) : Number(result2.toFixed(1))
  }

  const ChangeTitle = (titleLabel:string) =>  setTitle(titleLabel)
  const filterbyDay = FormateData?.filter(item => state.weekDay !== '—' ?
  item.day.startsWith(state.weekDay) :
  item.day.startsWith(today) )
  

 



  return (
    <section className='flex flex-col lg:flex-row xl:items-start items-center jusify-center  p-5 lg:p-10 '>
      <div className='flex flex-col  gap-1 tb-gap-3 lg:gap-5'>
        <div className={!data ? 'glassEffect  w-[100%] h-50 tb:h-55 xl:h-50 rounded-2xl' : 
          ' w-[100%] h-50 tb:h-55 xl:h-52 rounded-2xl banner'}>
          <div className='flex flex-col items-center text-center xl:text-left justify-center mt-23 '>
            {!data && <div>
              <PulseLoader size={10} color='#fff' />
            <p className='text-white text-[1.2em] mt-2'>Loading...</p></div>}

            {data && <div className='flex flex-col md:flex-row  justify-between items-center w-[100%]  mt-[-2em] px-4'>
              <div className='text-white'>
                <h4 className='text-[1.5em] xl:text-[1.2em] font-bold'>{country}, {city}</h4>
                <p className='text-[1.5em] xl:text-[1.2em]  font-bold'>{`${ ConvertData && UseGetDay(ConvertData[0].dt, 2)} ,   
                ${selectMoth(currentDate.getMonth())} ${currentDate.getDate()},  ${currentDate.getFullYear()}`} </p>
              </div>

              <div className='flex flex-row  items-center font-bold text-white'>
                <img src={UseWeathercode(1)} className=' w-13 md:w-20' alt=''/>
                <p className='text-[2em] xl:text-[4em] '>{UseTemp(data.current.temperature_2m,state.temperature)}°</p>
              </div>
              
            </div>}

          </div>

        </div>
        <div className='grid grid-cols-2 md:auto-cols-max md:grid-flow-col 
         gap-4   grid-row-2 lg:grid-cols-4 lg:gap-5 mt-2.5 w-full'>
          <div className='  glassEffect  w-39 xl:w-52 md:w-45 lg:w-39 h-25  rounded-2xl glassEffect p-2.5 text-white '>
            <h3>Feels Like</h3> <br />
            {!data ? <p>—</p> : <p className=' mt-[-.5em] text-[1.4em] md:text-[2em]'>{UseTemp(data.current.apparent_temperature, state.temperature)} °</p> }
          </div>
          <div className='  glassEffect  w-39 xl:w-52 md:w-45 lg:w-39 h-25 rounded-2xl glassEffect p-2.5 text-white '>
            <h3>Humidity</h3> <br />
           {!data ? <p>—</p> : <p className=' mt-[-.5em] text-[1.4em] md:text-[2em]'>{data.current.relative_humidity_2m} %</p> }
          </div>
          <div className='  glassEffect  w-39 xl:w-52 md:w-45 lg:w-39 h-25 rounded-2xl glassEffect p-2.5 text-white '>
            <h3>Wind</h3> <br />
               {!data ? <p>—</p> : <p className=' mt-[-.5em] text-[1.4em] md:text-[2em]'> {UseWind(data.current.wind_speed_10m, state.windSpeed)} {state.windSpeed}</p> }
          </div>
          <div className='  glassEffect  w-39 xl:w-52 md:w-45 lg:w-39 h-25 rounded-2xl glassEffect p-2.5 text-white '>
            <h3>Precipitation</h3> <br />
               {!data ? <p>—</p> : <p className=' mt-[-.5em] text-[1.4em] md:text-[2em]'> {UsePrec(Number(data.current.precipitation), state.precipitation)} {state.precipitation}</p> }
          </div>
        </div>

        <h4 className='text-white font-bold my-1.5'>Daily forecast</h4>
        <div className='grid grid-cols-3 md:grid-cols-7  grid-rows-3 lg:grid-cols-7  lg:grid-rows-1 gap-4.5 lg:gap-2.5'>
           {
                    data !== null ? ConvertData?.map((data2) => (
                    <FullBlocks classInLine='glassEffect  w-24.5 xl:w-29 h-35 md:h-40  rounded-2xl glassEffect' type={1} data={data2} />
                    )) : <>
                  <FullBlocks classInLine='glassEffect  w-24.5 xl:w-29 h-35 md:h-40  rounded-2xl glassEffect' type={3}  />
                 <FullBlocks classInLine='glassEffect  w-24.5 xl:w-29 h-35 md:h-40  rounded-2xl glassEffect' type={3}  />
                 <FullBlocks classInLine='glassEffect  w-24.5 xl:w-29 h-35 md:h-40  rounded-2xl glassEffect' type={3}  />
                 <FullBlocks classInLine='glassEffect  w-24.5 xl:w-29 h-35 md:h-40  rounded-2xl glassEffect' type={3} />
                 <FullBlocks classInLine='glassEffect  w-24.5 xl:w-29 h-35 md:h-40  rounded-2xl glassEffect' type={3}  />
                 <FullBlocks classInLine='glassEffect  w-24.5 xl:w-29 h-35 md:h-40  rounded-2xl glassEffect' type={3}  />
                 <FullBlocks classInLine='glassEffect  w-24.5 xl:w-29 h-35 md:h-40  rounded-2xl glassEffect' type={3}  />
                    </>
                  }
        </div>
      </div>

      <div className='glassEffect tb:w-[81.5%] w-[100%] tb:mt-[-35%]  mt-5 md:mt-[-40%] 
           lg:mt-[0rem] lg:ml-5   tb:h-100 lg:w-[25%]  h-120 lg:h-144 lg:mb-1 rounded-2xl p-4'>
        <div className='flex flex-row gap-2 justify-between items-center'>
          <h4 className='text-white font-semibold'>Hourly forecast</h4>
          <DropContainer icon1={false} icon2={true} name={ConvertData ? title : '—' } >
            <ListV2 hundleFunction={SelectType} 
            ChangeTitle={ChangeTitle}
            label='Monday' currentValue={state.weekDay} 
            value={ConvertData && ConvertData[0].dt ? ConvertData[0].dt : '' }
             ReduceType='WEEKDAY' isIcon={false} />
            <ListV2 hundleFunction={SelectType} label='Tuesday' ChangeTitle={ChangeTitle} currentValue={state.weekDay} value={ConvertData && ConvertData[1].dt ? ConvertData[1].dt : '' } ReduceType='WEEKDAY' isIcon={false} />
            <ListV2 hundleFunction={SelectType} label='Wednesday' ChangeTitle={ChangeTitle} currentValue={state.weekDay} value={ConvertData && ConvertData[2].dt ? ConvertData[2].dt : '' } ReduceType='WEEKDAY' isIcon={false} />
            <ListV2 hundleFunction={SelectType} label='Thursday' ChangeTitle={ChangeTitle} currentValue={state.weekDay} value={ConvertData && ConvertData[3].dt ? ConvertData[3].dt : '' } ReduceType='WEEKDAY' isIcon={false} />
            <ListV2 hundleFunction={SelectType} label='Friday' ChangeTitle={ChangeTitle} currentValue={state.weekDay} value={ConvertData && ConvertData[4].dt ? ConvertData[4].dt : '' } ReduceType='WEEKDAY' isIcon={false} />
            <ListV2 hundleFunction={SelectType} label='Saturday' ChangeTitle={ChangeTitle} currentValue={state.weekDay} value={ConvertData && ConvertData[5].dt ? ConvertData[5].dt : '' } ReduceType='WEEKDAY' isIcon={false} />
            <ListV2 hundleFunction={SelectType} label='Sunday' ChangeTitle={ChangeTitle} currentValue={state.weekDay} value={ConvertData && ConvertData[6].dt ? ConvertData[6].dt : '' } ReduceType='WEEKDAY' isIcon={false} />
          </DropContainer>
        </div>
         <div className='mt-2.5 overflow-y-scroll  h-100 md:h-115 xl:h-120'>
           {
                    data !== null ? filterbyDay?.map((data1) => (
                           <FullBlocks classInLine='glassEffect  w-[100%] flex flex-row items-center   h-12  rounded-[5px] glassEffect  my-4.5'
                            type={2}
                            data={data1} />
                    )) : <>
                 <FullBlocks classInLine='glassEffect  w-[100%]  h-12  rounded-[5px] glassEffect   my-1.5 md:my-4.5' type={3}  />
                 <FullBlocks classInLine='glassEffect  w-[100%]  h-12  rounded-[5px] glassEffect  my-1.5 md:my-4.5' type={3}  />
                 <FullBlocks classInLine='glassEffect  w-[100%]  h-12  rounded-[5px] glassEffect  my-1.5 md:my-4.5' type={3}  />
                 <FullBlocks classInLine='glassEffect  w-[100%]  h-12  rounded-[5px] glassEffect  my-1.5 md:my-4.5' type={3} />
                 <FullBlocks classInLine='glassEffect  w-[100%]  h-12  rounded-[5px] glassEffect  my-1.5 md:my-4.5' type={3}  />
                 <FullBlocks classInLine='glassEffect  w-[100%]  h-12  rounded-[5px] glassEffect  my-1.5 md:my-4.5' type={3}  />
                 <FullBlocks classInLine='glassEffect  w-[100%]  h-12  rounded-[5px] glassEffect  my-1.5 md:my-4.5' type={3}  />
                  <FullBlocks classInLine='glassEffect w-[100%]  h-12  rounded-[5px] glassEffect  my-1.5 md:my-4.5' type={3}  />
                 <FullBlocks classInLine='glassEffect  w-[100%]  h-12  rounded-[5px] glassEffect  my-1.5 md:my-4.5' type={3}  />
                    </>
                  }
         </div>
      </div>
    </section>
  )
}

export default WeatherGrid
