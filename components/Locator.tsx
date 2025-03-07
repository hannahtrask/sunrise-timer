'use client'

import { Box, Text, Input, Button } from '@chakra-ui/react'
import { useState } from 'react'

const OPEN_WEATHER_GEOCODE_API_ROUTE = 'http://api.openweathermap.org/geo/1.0/'

export const Locator = () => {
  const [zipCode, setZipCode] = useState('')
  const [location, setLocation] = useState(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await fetch(
      `${OPEN_WEATHER_GEOCODE_API_ROUTE}zip?zip=${zipCode}&appid=${process.env.OPEN_WEATHER_API_KEY}`,
    )
    const data = await response.json()
    setLocation(data)
  }

  return (
    <Box style={{ display: 'flex', alignItems: 'center' }}>
      <form onSubmit={handleSubmit}>
        <Input
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="Enter zip code"
        />
        <Button type="submit">Submit</Button>
      </form>
      {location && (
        <Text>
          Location: {location.name}, {location.country}
        </Text>
      )}
    </Box>
  )
}
