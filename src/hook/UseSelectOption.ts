


export const UseTemp = (name: string, valor : number) => {
    return name === 'celsius' ? valor : (valor * 9) / 5 + 32
}


export const UseWind = (name: string, valor : number) => {
  return name === 'km' ? valor : valor / 1.609
}


export const UsePrec = (name: string, valor : number) => {
  return name === 'mm' ? valor : valor / 25.4
}