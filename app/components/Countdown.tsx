'use client'

import { useEffect, useState } from 'react'
import { startSunriseCountdown } from '@/app/utils/date.util'

export const Countdown = ({ sunrise }) => {
  const [timeLeft, setTimeLeft] = useState<string>('')

  useEffect(() => {
    return startSunriseCountdown(new Date(sunrise), setTimeLeft)
  }, [])

  return (
    <div>
      <h2>Time until sunrise:</h2>
      <p>{timeLeft}</p>
    </div>
  )
}
