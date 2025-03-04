import { JACKSON_LAT, JACKSON_LON } from '@/app/constants/jackson'

export const SUNRISE_API_ROUTE =
  'https://api.sunrise-sunset.org/json?lat=' +
  JACKSON_LAT +
  '&lng=' +
  JACKSON_LON +
  '&formatted=0'
