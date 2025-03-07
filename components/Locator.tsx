'use client'

import {
  Box,
  Text,
  Input,
  Button,
  useTheme,
  Heading,
  CardBody,
  Card,
  Stack,
} from '@chakra-ui/react'
import { useState } from 'react'

const OPEN_WEATHER_GEOCODE_API_ROUTE = 'http://api.openweathermap.org/geo/1.0/'

// todo pass the gotten coordinates to the countdown when present
export const Locator = () => {
  const [zipCode, setZipCode] = useState('')
  const [location, setLocation] = useState(null)
  const theme = useTheme()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log(
      'process.env.OPEN_WEATHER_API_KEY: ',
      process.env.OPEN_WEATHER_API_KEY,
    )
    event.preventDefault()
    const response = await fetch(
      `${OPEN_WEATHER_GEOCODE_API_ROUTE}zip?zip=${zipCode}&appid=${process.env.OPEN_WEATHER_API_KEY}`,
    )
    const data = await response.json()
    console.log('data: ', data)
    setLocation(data)
  }

  return (
    <>
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', gap: 4, flexDirection: 'column' }}
        >
          <Heading as="h4" size="xl">
            Look up your location by zip code:
          </Heading>
          <Input
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Enter zip code"
            style={{
              textAlign: 'center',
              backgroundColor: theme.colors.sunrise.sunriseSky,
              opacity: '0.8',
            }}
          />
          <Button
            type="submit"
            style={{
              backgroundColor: theme.colors.sunrise.sunrisePink,
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
      {location && (
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            alignItems: 'center',
          }}
        >
          <Card maxW="sm" style={{ opacity: '0.9' }}>
            <CardBody>
              <Stack mt="6" spacing="3" textAlign="center">
                <Heading as="h3" size="md">
                  Your location is:
                </Heading>
                <Text fontWeight="semibold" textStyle="3xl">
                  {location.name}
                </Text>
                <Text>
                  Latitude: {location.lat}, Longitude: {location.lon}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      )}
    </>
  )
}
