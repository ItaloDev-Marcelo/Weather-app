
export default  function UseGetDay  (WeekDay:string | null, num:number):string {
   if(!WeekDay) return ''
   const WeeksDays = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
   ]


    const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
   ]

   const [year,month,day] = WeekDay.split('-').map(Number);
   const date = new Date(year, month - 1, day)
   return num == 1 ? WeeksDays[date.getDay()] :  days[date.getDay() - 1]
}

