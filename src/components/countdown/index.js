import React, { useEffect, useState } from 'react'

import { calculateTimeLeft } from '@src/utils/helpers'

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(`Mar 28, 2022 10:00:00 AM PST`))

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(`Mar 28, 2022 10:00:00 AM PST`))
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    timerComponents.push(
      <li key={interval} className="cursor-pointer clock-item">
        <span className="count-number">{timeLeft[interval] || 0}</span>
        <p className="count-text">{interval}</p>
      </li>
    )
  })

  return (
    <div className="countdown py-4 md:py-8">
      <ul id="countdown" className="w-full flex justify-between" data-date="March 28, 2022 6:00:00 PM UTC">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <></>
          // <h1 className="heading" style={{ fontSize: '5rem' }}>
          //   Time&apos;s up!
          // </h1>
        )}
      </ul>
    </div>
  )
}

export default CountDown
