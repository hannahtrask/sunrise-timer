'use client'

import {
  Box,
  Text,
  Input,
  Button,
  FormErrorMessage,
  FormLabel,
  FormControl,
  useTheme,
  Heading,
  CardBody,
  Card,
  Stack,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const OPEN_WEATHER_GEOCODE_API_ROUTE = 'http://api.openweathermap.org/geo/1.0/'
const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY

interface FormInputs {
  zipCode: string
}

type LocatorProps = {
  onLocationFound: (lat: number, lon: number, name: string) => void
}

export const Locator = ({ onLocationFound }: LocatorProps) => {
  const [location, setLocation] = useState(null)
  const theme = useTheme()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data: FormInputs) => {
    const { zipCode } = data
    console.log(data)
    try {
      const response = await fetch(
        `${OPEN_WEATHER_GEOCODE_API_ROUTE}zip?zip=${zipCode}&appid=${API_KEY}`,
      )
      const location = await response.json()
      setLocation(location)
      onLocationFound(location.lat, location.lon, location.name)
    } catch (error) {
      console.error('Error fetching your location: ', error)
      setLocation(null)
    }
  }

  return (
    <>
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', gap: 4, flexDirection: 'column' }}
        >
          <Heading as="h4" size="xl">
            Look up your location by zip code:
          </Heading>
          <FormControl isInvalid={errors.zipCode}>
            <Input
              id="zip"
              placeholder="enter zip code"
              {...register('zipCode', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 5' },
              })}
              style={{
                textAlign: 'center',
                backgroundColor: theme.colors.sunrise.sunriseSky,
                opacity: '0.8',
              }}
            />
            <FormErrorMessage>
              {errors.zipCode && errors.zipCode.message}
            </FormErrorMessage>
          </FormControl>
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
