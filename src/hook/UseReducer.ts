import type { Action } from "../types/Reduce.type";
export type State = {
  temperature: string
  windSpeed: string
  precipitation: string
  weekDay: string
};

const initialState = {temperature: 'celsius', windSpeed: 'km/h', precipitation: 'mm', weekDay: '—'};

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

