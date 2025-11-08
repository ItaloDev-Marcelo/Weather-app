
import type { Action, State} from "../types/Reduce.type";

const initialState:State = {temperature: 'celsius', windSpeed: 'km/h', precipitation: 'mm', weekDay: '—'};

const ActionData = {
     TEMPERATURE: 'TEMPERATURE', 
     WINDSPEED: 'WINDSPEED',
     PRECIPITATION: 'PRECIPITATION',
     WEEKDAY: 'WEEKDAY'
};

const reduceData = (state:State, action:Action) => {
    switch(action.type) {
        case ActionData.TEMPERATURE:
          return {
            ...state,
            temperature: action.payload
          }
        case ActionData.WINDSPEED:
          return {
            ...state,
            windSpeed: action.payload
          } 
        case ActionData.PRECIPITATION:
          return {
            ...state,
            precipitation: action.payload
          } 
        case ActionData.WEEKDAY:
          return {
            ...state,
            weekDay: action.payload
          } 
        default:
            return state      
    }
}

export {reduceData, initialState};

