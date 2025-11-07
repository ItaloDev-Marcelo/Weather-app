import type { WeatherIconsType } from "../types/Weather.Icons.type";
import Drizzle from '../../assets/images/icon-drizzle.webp'
import   Fog  from  '../../assets/images/icon-fog.webp'
import  Overcast from '../../assets/images/icon-overcast.webp'
import  PartlyCloudy from '../../assets/images/icon-partly-cloudy.webp'
import Rain from '../../assets/images/icon-rain.webp'
import Snow from  '../../assets/images/icon-snow.webp'
import Storm from '../../assets/images/icon-storm.webp'
import  Sunny from '../../assets/images/icon-sunny.webp'

export const WeatherIconsList:WeatherIconsType = {
        Drizzle,
        Fog,
        Overcast,
        PartlyCloudy,
        Rain,
        Snow,
        Storm,
        Sunny
}


export const UseWeathercode = (code: number): string => {
   switch(code) {
        case 0:
        case 1:
         return WeatherIconsList.Sunny;
        case 2:
          return WeatherIconsList.PartlyCloudy;
        case 3 :
           return WeatherIconsList.Overcast
        case 45:
        case 48:
           return WeatherIconsList.Fog
        case 51:         
         case 53:         
          case 55:         
           case 56:         
            case 57:
         return WeatherIconsList.Drizzle
          case 61:         
         case 63:         
          case 65:         
           case 80:         
            case 81:    
              case 82:   
              return WeatherIconsList.Rain
        case 71:         
         case 73:         
          case 75:         
           case 77:         
            case 85:    
              case 86:    
              return WeatherIconsList.Snow
        case 95:         
         case 96:         
          case 99:      
            return WeatherIconsList.Storm  
        default:
         return WeatherIconsList.Sunny  
   }
}
