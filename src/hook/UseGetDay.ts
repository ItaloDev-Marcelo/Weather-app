
export default  function UseGetDay  (WeekDay:string):string {
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
   const [year,month,day] = WeekDay.split('-').map(Number);
   const date = new Date(year, month - 1, day)
   return WeeksDays[date.getDay()]
}

