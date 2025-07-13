import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Clock() {
    const [time,setTime] = useState(new Date().toLocaleTimeString());
  
    useEffect(()=>{
        let id = setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        } , 1000)
        return ()=> clearInterval(id)
    },[])

    return (
    <div>
        Time: { time }
    </div>
  )
}

export default Clock