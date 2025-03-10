'use client'
import { useState } from 'react'
import { Countdown } from '@/components/Countdown'
import { Locator } from '@/components/Locator'

export const LocationManager = () => {
  const [latitude, setLatitude] = useState<number>(43.4799) // Jackson WY default latitude
  const [longitude, setLongitude] = useState<number>(110.7624) // Jackson WY default longitude
  const [placeName, setPlaceName] = useState<string>('Jackson Hole, Wyoming')
  const handleLocationFound = (lat: number, lon: number, name: string) => {
    setLatitude(lat)
    setLongitude(lon)
    setPlaceName(name)
  }

  return (
    <>
      <Countdown
        latitude={latitude}
        longitude={longitude}
        placeName={placeName}
      />
      <Locator onLocationFound={handleLocationFound} />
    </>
  )
}
