'use client'
import { useState } from 'react'
import { Countdown } from '@/components/Countdown'
import { Box } from '@chakra-ui/react'
import { Locator } from '@/components/Locator'

export const LocationManager = () => {
  const [latitude, setLatitude] = useState<number>(null)
  const [longitude, setLongitude] = useState<number>(null)
  const [placeName, setPlaceName] = useState<string>(null)

  const handleLocationFound = (lat: number, lon: number, name: string) => {
    setLatitude(lat)
    setLongitude(lon)
    setPlaceName(name)
  }

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
      }}
    >
      <Locator onLocationFound={handleLocationFound} />
      <Countdown
        latitude={latitude}
        longitude={longitude}
        placeName={placeName}
      />
    </Box>
  )
}
