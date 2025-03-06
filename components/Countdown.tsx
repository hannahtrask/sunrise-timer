'use client'

import { useEffect, useState } from 'react'
import { formatSunriseTime, getSunrise } from '@/app/utils/date.util'
import {
  Box,
  Card,
  Heading,
  HStack,
  Spinner,
  Tag,
  Text,
} from '@chakra-ui/react'

export const Countdown = () => {
  const [sunriseTime, setSunriseTime] = useState<Date | null>(null)
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const [loading, setLoading] = useState<boolean>(true)

  const formattedSunrise = sunriseTime ? formatSunriseTime(sunriseTime) : null

  useEffect(() => {
    getSunrise().then((result) => {
      setSunriseTime(new Date(result as string))
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (sunriseTime) {
      const interval = setInterval(() => {
        setTimeLeft(getTimeRemaining(sunriseTime))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [sunriseTime])

  function getTimeRemaining(targetDate: Date) {
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    const hours = Math.abs(Math.floor((difference / (1000 * 60 * 60)) % 24))
    const minutes = Math.abs(Math.floor((difference / 1000 / 60) % 60))
    const seconds = Math.abs(Math.floor((difference / 1000) % 60))

    return { hours, minutes, seconds }
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <Card style={{ padding: '5rem', opacity: '0.9' }}>
      <Box style={{ marginBottom: '2rem' }}>
        <Heading as="h2" size="2xl">
          Time until sunrise:
        </Heading>
        <HStack spacing={4} style={{ marginTop: '3rem' }}>
          <Tag size="lg" key={1} variant="solid">
            {String(timeLeft.hours).padStart(2, '0')} hours{' '}
          </Tag>
          <Tag size="lg" key={2} variant="solid">
            {String(timeLeft.minutes).padStart(2, '0')} minutes{' '}
          </Tag>
          <Tag size="lg" key={3} variant="solid">
            {String(timeLeft.seconds).padStart(2, '0')} seconds
          </Tag>
        </HStack>
      </Box>
      <Text fontSize="lg">
        Tomorrow&apos;s sunrise in Jackson, WY is at {formattedSunrise}.
      </Text>
    </Card>
  )
}
