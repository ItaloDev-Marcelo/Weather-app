
const ConvertePrecipitation = (valor : number,name: string) => {
    const result1 = valor 
    const result2 = valor / 25.4
    return  name === 'mm' ? Number(result1.toFixed(1)) : Number(result2.toFixed(1))
}

export default ConvertePrecipitation