'use client'

import { useEffect, useState } from 'react'
import {
  formatSunriseTime,
  getSunrise,
  startSunriseCountdown,
} from '@/app/utils/date.util'
import { Card } from '@chakra-ui/react'

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<string>('')
  const [sunriseTime, setSunriseTime] = useState<string>('')

  useEffect(() => {
    getSunrise().then((result) => {
      setSunriseTime(result as string)
    })
  }, [])
  const formattedSunrise = formatSunriseTime(sunriseTime)

  useEffect(() => {
    return startSunriseCountdown(new Date(sunriseTime), setTimeLeft)
  }, [])

  return (
    <Card style={{ padding: '5rem' }}>
      <h2>Time until sunrise:</h2>
      <p>{timeLeft}</p>
      <p>Tomorrow&apos;s sunrise in Jackson, WY is at {formattedSunrise}.</p>
    </Card>
  )
}
