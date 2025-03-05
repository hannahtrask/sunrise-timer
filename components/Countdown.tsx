'use client'

import { useEffect, useState } from 'react'
import {
  formatSunriseTime,
  getSunrise
} from '@/app/utils/date.util'
import { Card } from '@chakra-ui/react'

export const Countdown = () => {
  const [sunriseTime, setSunriseTime] = useState<Date>(null)
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const formattedSunrise = sunriseTime ? formatSunriseTime(sunriseTime) : null

  useEffect(() => {
    getSunrise().then((result) => {
      setSunriseTime(new Date(result as string))
    })
  }, [])

  useEffect(() => {
    if (sunriseTime) {
      const interval = setInterval(() => {
        setTimeLeft(getTimeRemaining(sunriseTime));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [sunriseTime]);

  function getTimeRemaining(targetDate: Date) {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const hours = Math.abs(Math.floor((difference / (1000 * 60 * 60)) % 24));
    const minutes = Math.abs(Math.floor((difference / 1000 / 60) % 60))
    const seconds = Math.abs(Math.floor((difference / 1000) % 60))

    return { hours, minutes, seconds };
  }

  return (
    <Card style={{ padding: '5rem' }}>
      <div>
      <h2>Time until sunrise:</h2>
        <p>
          {String(timeLeft.hours).padStart(2, "0")} hours,{' '}
          {String(timeLeft.minutes).padStart(2, "0")} minutes,{' '}
          {String(timeLeft.seconds).padStart(2, "0")} seconds
        </p>
      </div>
      <p>Tomorrow&apos;s sunrise in Jackson, WY is at {formattedSunrise}.</p>
    </Card>
  )
}