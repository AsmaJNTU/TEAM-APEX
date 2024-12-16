 "use client"
 import React from 'react'
import { Calendar } from "@/components/ui/calendar"

function Calender() {

    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className='flex justify-center items-center'>
            <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
        </div>
      
    )
    
}

export default Calender
