import { FormatedDt } from '../types/types'


export const FormatDate = (StringDate: string) : FormatedDt => {
    const d1: Date = new Date(StringDate)
    const Day = d1.getDate()
    const Month = d1.getMonth()
    const Year = d1.getFullYear()
    return {date: `${Day}`, month: `${Month}`,year :`${Year}`}
}