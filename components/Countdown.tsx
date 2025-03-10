'use client'

import { useEffect, useState } from 'react'
import {
  Box,
  Card,
  CardBody,
  Spinner,
  Stack,
  Text,
  useTheme,
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
  const theme = useTheme()

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
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        style={{
          display: 'flex',
          gap: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          opacity: 0.9,
        }}
      >
        <Card maxW="sm" style={{ width: '10rem', textAlign: 'center' }}>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Text fontSize="2xl">
                {String(timeLeft.hours).padStart(2, '0')}
              </Text>
              <Text>HOURS</Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" style={{ width: '10rem', textAlign: 'center' }}>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Text fontSize="2xl">
                {String(timeLeft.minutes).padStart(2, '0')}
              </Text>
              <Text>MINUTES</Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW="sm" style={{ width: '10rem', textAlign: 'center' }}>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Text fontSize="2xl">
                {String(timeLeft.seconds).padStart(2, '0')}
              </Text>
              <Text>SECONDS</Text>
            </Stack>
          </CardBody>
        </Card>
      </Box>
      <Text
        fontSize="lg"
        style={{
          fontWeight: 'bold',
          marginTop: '6rem',
          color: theme.colors.sunrise.sunriseSky,
        }}
      >
        Tomorrow&apos;s sunrise in {placeName} is at {formattedSunrise}.
      </Text>
    </Box>
  )
}
