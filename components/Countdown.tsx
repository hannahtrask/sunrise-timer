'use client'

import { useEffect, useState } from 'react'
import {
  Box,
  Card,
  Heading,
  HStack,
  Spinner,
  Tag,
  Text,
} from '@chakra-ui/react'

type CountdownProps = {
  latitude: number
  longitude: number
  placeName: string
}

export const Countdown = ({
  latitude,
  longitude,
  placeName,
}: CountdownProps) => {
  const [sunriseTime, setSunriseTime] = useState<Date | null>(null)
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const [loading, setLoading] = useState<boolean>(true)
  const [formattedSunrise, setFormattedSunrise] = useState('')

  useEffect(() => {
    if (latitude && longitude) {
      const fetchSunriseTime = async () => {
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        const formattedDate = tomorrow.toISOString().split('T')[0]

        const response = await fetch(
          `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&date=${formattedDate}`,
        )
        const data = await response.json()
        const dateStr = data.results.date
        const timeStr = data.results.sunrise
        const sunrise = new Date(`${dateStr} ${timeStr}`)
        setSunriseTime(sunrise)
        setFormattedSunrise(sunrise.toLocaleTimeString())
        setLoading(false)
      }
      fetchSunriseTime().catch(console.error)
    }
  }, [latitude, longitude])

  useEffect(() => {
    if (sunriseTime) {
      const interval = setInterval(() => {
        setTimeLeft(getTimeRemaining(sunriseTime))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [sunriseTime])

  const getTimeRemaining = (targetDate: Date) => {
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    const hours = Math.abs(Math.floor((difference / (1000 * 60 * 60)) % 24))
    const minutes = Math.abs(Math.floor((difference / 1000 / 60) % 60))
    const seconds = Math.abs(Math.floor((difference / 1000) % 60))

    return { hours, minutes, seconds }
  }

  if (loading) {
    return (
      <Box style={{ alignSelf: 'center' }}>
        <Spinner />
      </Box>
    )
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
        Tomorrow&apos;s sunrise in {placeName} is at {formattedSunrise}.
      </Text>
    </Card>
  )
}
