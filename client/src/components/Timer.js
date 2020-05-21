import React, { useEffect, useRef, useState } from 'react'
import './css/timer.css'

const Timer = () => {
  const [paws, setPaws] = useState(1)
  const timer = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      timer.current+=1
      console.log(timer.current)
      setPaws(timer.current % 3 + 1)
    }, 200)
    return () => clearInterval(interval)
  }, [])


  const renderLoadingPaws = () => {
    return [...Array(paws).keys()].map(index => (
      <div key={`paw-${index}`} className="loading-bar"></div>
    ))
  }

  return (
    <div className="timer-wrapper">
      {renderLoadingPaws()}
    </div>
  )
}

export default Timer
