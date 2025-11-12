import { PulseLoader } from 'react-spinners'
import DropContainer from '../components/drop/DropContainer';
import ListV2 from '../components/drop/Drop-items/ListItemV2';
import {UseWeathercode} from '../hook/UseWeathercode'
import FullBlocks from '../components/GridBlocks/FullBlocks';
import type { CommunType } from '../types/ComumReduce.type';
import { useState } from 'react';
import UseGetDay from '../hook/UseGetDay';
import ConverteTemperature from '../utils/ConverteTemperature';
import ConvertePrecipitation from '../utils/ConvertePrecipitation'
import ConverteWind from '../utils/ConverteWind'
import SelectMonth from '../utils/SelectMonth'
const WeatherGrid = ({SelectType, state, data, country, city}:CommunType) => {
    const today = new Date().toISOString().split('T')[0]; 
    const currentDate = new Date()
    const [title, setTitle] = useState('Monday')

    
    const FormateData = data && data?.hourly?.time.map((t, i) => ({
    day: t.slice(0,10),
    time: t.slice(11,13),
    temperature: ConverteTemperature(data.hourly.temperature_2m[i],state.temperature),
    weathercode: data.hourly.weathercode[i]
  }))

    const ConvertData = data && data?.daily?.time.map((dt, index) => ({
    dt,
    max: Number(ConverteTemperature(data.daily.temperature_2m_max[index],state.temperature)),
    min: Number(ConverteTemperature(data.daily.temperature_2m_min[index],state.temperature)),
    weathercode: data.daily.weathercode[index]
  }))


  const ChangeTitle = (titleLabel:string) =>  setTitle(titleLabel)
  const filterbyDay = FormateData?.filter(item => state.weekDay !== '—' ?
  item.day.startsWith(state.weekDay) :
  item.day.startsWith(today) )
  

 



  return (
    <section className='flex flex-col lg:flex-row   items-center justify-center   p-5 lg:p-10 '>
      <div className='flex flex-col  gap-1 tb-gap-3 lg:gap-5'>
        <div className={!data ? 'glassEffect  w-[100%] h-70  rounded-2xl' : 
           ' w-[100%]  h-70  banner rounded-2xl bg-no-repeat  bg-[#000] bg-[url(./assets/images/bg-today-small.svg)] md:bg-[url(./assets/images/bg-today-large.svg)]'}>
          <div className='flex flex-col items-center text-center xl:text-left justify-center mt-23 '>
            {!data && <div>
              <PulseLoader size={10} color='#fff' />
            <p className='text-white text-[1.2em] mt-2 xl:mt-6'>Loading...</p></div>}

            {data && <div className='flex flex-col md:flex-row  justify-between items-center w-[100%]  mt-[-2em] px-4 md:px-7'>
              <div className='text-white md:text-left'>
                <h4 className='text-[1.7em] xl:text-[2em] font-bold'>{country}, {city}</h4>
                <p className='text-[.9em]   font-normal'>{`${ ConvertData && UseGetDay(ConvertData[0].dt, 2)} ,   
                ${SelectMonth(currentDate.getMonth())} ${currentDate.getDate()},  ${currentDate.getFullYear()}`} </p>
              </div>

              <div className='flex flex-row  items-center w-[80%]  justify-between md:w-[30%] md:justify-none font-bold text-white mt-5'>
                <img src={UseWeathercode(1)} className=' w-27 md:w-20' alt=''/>
                <p className='text-[4em] md:text-[6em] '>{ConverteTemperature(data.current.temperature_2m,state.temperature)}°</p>
              </div>
              
            </div>}

          </div>

        </div>
        <div className='grid grid-cols-2 md:auto-cols-max md:grid-flow-col 
         gap-4  grid-row-2 lg:grid-cols-4 lg:gap-5 xl:gap-2.5 mt-2.5 md:mt-5 xl:mt-2.5  w-full xl:w-[100%] '>
          <div className='  glassEffect  w-39 xl:w-45 md:w-45 lg:w-39 h-25  rounded-2xl glassEffect p-2.5 text-white '>
            <h3>Feels Like</h3> <br />
            {!data ? <p>—</p> : <p className=' mt-[-.5em] text-[1.4em] md:text-[2em]'>{ConverteTemperature(data.current.apparent_temperature, state.temperature)} °</p> }
          </div>
          <div className='  glassEffect  w-39 xl:w-45 md:w-45 lg:w-39 h-25 rounded-2xl glassEffect p-2.5 text-white '>
            <h3>Humidity</h3> <br />
           {!data ? <p>—</p> : <p className=' mt-[-.5em] text-[1.4em] md:text-[2em]'>{data.current.relative_humidity_2m} %</p> }
          </div>
          <div className='  glassEffect  w-39 xl:w-45 md:w-45 lg:w-39 h-25 rounded-2xl glassEffect p-2.5 text-white '>
            <h3>Wind</h3> <br />
               {!data ? <p>—</p> : <p className=' mt-[-.5em] text-[1.4em] md:text-[2em]'> {ConverteWind(data.current.wind_speed_10m, state.windSpeed)} {state.windSpeed}</p> }
          </div>
          <div className='  glassEffect  w-39 xl:w-45 md:w-45 lg:w-39 h-25 rounded-2xl glassEffect p-2.5 text-white '>
            <h3>Precipitation</h3> <br />
               {!data ? <p>—</p> : <p className=' mt-[-.5em] text-[1.4em] md:text-[2em]'> {ConvertePrecipitation(Number(data.current.precipitation), state.precipitation)} {state.precipitation}</p> }
          </div>
        </div>

        <h4 className='text-white font-bold my-1.5'>Daily forecast</h4>
        <div className='grid grid-cols-3 md:grid-cols-7  grid-rows-3 lg:grid-cols-7  lg:grid-rows-1 gap-4.5 lg:gap-1.5'>
           {
                    data !== null ? ConvertData?.map((data2, index) => (
                    <FullBlocks classInLine='glassEffect  w-24.5 xl:w-24 h-35 md:h-40 xl:h-35  rounded-2xl glassEffect'
                     type={1} data={data2} key={index} />
                    )) : <>
                  <FullBlocks classInLine='glassEffect  w-24.5 xl:w-22 h-35 md:h-40  rounded-2xl glassEffect' type={3}  />
                 <FullBlocks classInLine='glassEffect  w-24.5 xl:w-22 h-35 md:h-40  rounded-2xl glassEffect' type={3}  />
                 <FullBlocks classInLine='glassEffect  w-24.5 xl:w-22 h-35 md:h-40  rounded-2xl glassEffect' type={3}  />
                 <FullBlocks classInLine='glassEffect  w-24.5 xl:w-22 h-35 md:h-40  rounded-2xl glassEffect' type={3} />
                 <FullBlocks classInLine='glassEffect  w-24.5 xl:w-22 h-35 md:h-40  rounded-2xl glassEffect' type={3}  />
                 <FullBlocks classInLine='glassEffect  w-24.5 xl:w-22 h-35 md:h-40  rounded-2xl glassEffect' type={3}  />
                 <FullBlocks classInLine='glassEffect  w-24.5 xl:w-22 h-35 md:h-40  rounded-2xl glassEffect' type={3}  />
                    </>
                  }
        </div>
      </div>

      <div className='glassEffect tb:w-[87.5%] w-[100%] tb:mt-[-35%]  mt-5 md:mt-[-40%] 
           lg:mt-[0rem] lg:ml-5   tb:h-90 lg:w-[25%]  h-120 md:h-110 lg:h-144 xl:h-157 lg:mb-1 rounded-2xl p-4'>
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
         <div className='mt-2.5 overflow-y-scroll   h-97  tb:h-70 md:h-85 xl:h-133'>
           {
                    data !== null ? filterbyDay?.map((data1, index) => (
                           <FullBlocks classInLine='glassEffect  w-[100%] flex flex-row items-center   h-12   rounded-[5px] glassEffect  my-4.5'
                            type={2}
                            data={data1} key={index} />
                    )) : <>
                 <FullBlocks classInLine='glassEffect  w-[100%]  h-12  rounded-[5px] glassEffect  my-1.5 md:my-4.5' type={3}  />
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
