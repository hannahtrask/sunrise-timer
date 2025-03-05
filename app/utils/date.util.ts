import { SUNRISE_API_ROUTE } from '@/app/constants/api-route'

/**
 * Fetch the sunrise time from the SunriseSunset.io API.
 * @returns The time of sunrise.
 */
export const getSunrise = async () => {
  const response = await fetch(SUNRISE_API_ROUTE)
  const data = await response.json()
  return data.results.sunrise
}

/**
 * Format the sunrise time to a human-readable format.
 * @param sunrise
 * @returns The formatted sunrise time as XX:XX, TZ
 */
export const formatSunriseTime = (sunrise: Date) => {
  const date = new Date(sunrise)
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'America/Denver', // MST timezone
    timeZoneName: 'short',
  }
  return date.toLocaleString('en-US', options)
}

/**
 * Calculate the time until sunrise.
 * @param sunrise
 * @param setTimeLeft
 * @returns The time until sunrise as an object with hours, minutes, and seconds.
 */
export const startSunriseCountdown = (
  sunrise: Date,
  setTimeLeft: React.Dispatch<React.SetStateAction<string>>,
) => {
  const updateCountdown = () => {
    const now = new Date()
    const remainingTime = sunrise.getTime() - now.getTime()

    if (remainingTime <= 0) {
      setTimeLeft('Sunrise has arrived!')
      clearInterval(interval)
    } else {
      const hours = Math.floor(remainingTime / (1000 * 60 * 60))
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60),
      )
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)

      setTimeLeft(
        `${String(hours).padStart(2, '0')} hours, ${String(minutes).padStart(2, '0')} minutes, ${String(seconds).padStart(2, '0')} seconds!!`,
      )
    }
  }

  const interval = setInterval(updateCountdown, 1000)

  return () => clearInterval(interval)
}
