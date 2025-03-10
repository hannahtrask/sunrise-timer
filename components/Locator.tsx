'use client'

import {
  Input,
  Button,
  FormErrorMessage,
  FormControl,
  useTheme,
  Heading,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const OPEN_WEATHER_GEOCODE_API_ROUTE = 'http://api.openweathermap.org/geo/1.0/'
const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY

interface FormInputs {
  zipCode: string
}

type LocatorProps = {
  onLocationFound: (lat: number, lon: number, name: string) => void
}

export const Locator = ({ onLocationFound }: LocatorProps) => {
  const theme = useTheme()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: FormInputs) => {
    const { zipCode } = data
    try {
      const response = await fetch(
        `${OPEN_WEATHER_GEOCODE_API_ROUTE}zip?zip=${zipCode}&appid=${API_KEY}`,
      )
      const location = await response.json()
      console.log('Location: ', location)
      onLocationFound(location.lat, location.lon, location.name)
    } catch (error) {
      console.error('Error fetching your location: ', error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: 'flex',
        gap: 6,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2rem',
      }}
    >
      <Heading as="h4" size="xl">
        search for sunrise time by your zip code
      </Heading>
      <FormControl style={{ width: '20rem' }}>
        <Input
          id="zip"
          placeholder="enter zip"
          {...register('zipCode')}
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
          width: '20rem',
        }}
      >
        ok lmk
      </Button>
    </form>
  )
}
