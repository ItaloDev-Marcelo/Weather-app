
const ConverteTemperature = (valor : number, name: string) => {
    const result1 = valor;
    const result2 =  (valor * 9) / 5 + 32
    return name === 'celsius' ? result1.toFixed(0) : result2.toFixed(0)
}

export default ConverteTemperature