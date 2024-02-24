import { useState, useEffect } from "react";

export default function ProgressBar(props){
    const [remainingTime, setRemainingTime] = useState(props.timer)
    useEffect(() => {
      const interval = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 10)
      }, 10);    
      return () => {
        clearInterval(interval)
      }
    }, [])
    return (
        <progress value={remainingTime} max={props.timer} />
    )
}