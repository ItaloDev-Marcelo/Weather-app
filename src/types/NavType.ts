export type NavProps = {
    SelectTemperature: (unit:string) => void,
    SelectWindSpeed: (unit:string) => void,
    SelectPrecipitation: (unit:string) => void,
    temperature: string,
    windSpeed: string,
    precipitation: string
}