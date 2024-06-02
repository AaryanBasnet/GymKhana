import dayjs from 'dayjs'//npm install dayjs- imported library



export function getMonth(month = dayjs().month()) {// Get the month name from the month number
 const year = dayjs().year()      // Get the current year
 
 const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day() // Get the first day of the month
 let currentMonthCount = 0 - firstDayOfTheMonth// Initialize the month count
 const daysMatrix = new Array(5).fill([]).map(()=>{
    return new Array(7).fill(null).map(()=> {
        currentMonthCount++
        return dayjs(new Date(year, month, currentMonthCount))
    
        
    })
 })
 return daysMatrix
}