

export type Action = | {type: 'TEMPERATURE', payload: string} |  {type: 'WINDSPEED', payload: string} |
  {type: 'PRECIPITATION', payload: string} |  {type: 'WEEKDAY', payload: string}   
  
export type TypeActionData = 'TEMPERATURE' | 'WINDSPEED' | 'PRECIPITATION' | 'WEEKDAY';

export type ActionType = {
  type: TypeActionData;
  payload: string;
};