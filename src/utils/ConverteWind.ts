
const ConverteWind = (valor : number,name: string) => {
    const result1 = valor;
    const result2 = valor /1.609
    return name === 'km/h' ? Number(result1.toFixed(2)) : Number(result2.toFixed(2))
}

export default ConverteWind